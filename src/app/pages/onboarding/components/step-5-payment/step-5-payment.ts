import { Component, inject, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OnboardingStore } from '../../store/onboarding-store';
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { environment } from '../../../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { AnalyticsService } from '../../../../services/analytics.service';

@Component({
  selector: 'app-step-5-payment',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe, FormsModule],
  templateUrl: './step-5-payment.html',
  styleUrl: './step-5-payment.css',
})
export class Step5Payment implements OnInit, AfterViewInit {
  store = inject(OnboardingStore);
  http = inject(HttpClient);
  cdr = inject(ChangeDetectorRef); // <-- Obliga a Angular a actualizar los números de la vista
  analytics = inject(AnalyticsService);

  // Variables de pago
  stripe: Stripe | null = null;
  elements: StripeElements | null = null;
  clientSecret: string = '';
  isProcessing = false;
  isFormValid = false; // <-- El botón arranca apagado hasta que Stripe diga "ok"
  paymentMessage = '';

  // Guardamos las cifras finales que devuelve el Backend (para dibujarlas a la derecha)
  backendAmount = 0;
  backendStateFee = 0;
  backendPlanPrice = 0;

  @ViewChild('paymentElement') paymentElementRef!: ElementRef;
  @ViewChild('linkAuthenticationElement') linkElementRef!: ElementRef;

  async ngOnInit() {
    // 1. Inicializamos Stripe con tu clave pública
    this.stripe = await loadStripe('pk_test_51SyELN2IoO4spMorCEX9RVTXGrjxisrGPGOGnjheGyR2cTdTZ8R5cXwVDZVVrdoIZbd2gUyXpqINKAwUKMW9vqUK00Y6Dav0cD');
  }

  ngAfterViewInit() {
    // 2. Traer la data del Store
    const lead = this.store.leadData();
    const entity = this.store.entityData();
    const plan = this.store.selectedPlan();

    const payload = {
      plan_id: plan,
      company_name: entity.companyName,
      registration_state: entity.state,
      entity_type: entity.type,
      lead_id: this.store.leadId() // <-- Inyectamos el ID guardado en el Paso 1
    };

    console.log('[Frontend] Enviando payload al Backend:', payload);

    // 3. Llamar al Backend usando nuestra variable de entorno centralizada
    this.http.post<any>(`${environment.apiUrl}/payments/create-intent`, payload)
      .subscribe({
        next: (data) => {
          console.log('[Frontend] Respuesta Exitosa del Backend:', data);
          this.clientSecret = data.clientSecret;

          // Guardamos la matemática certificada por el servidor
          this.backendAmount = data.amount;
          this.backendPlanPrice = data.plan_price;
          this.backendStateFee = data.state_fee;

          // 4. Montar los Elementos de Stripe en el HTML de Angular
          if (this.stripe && this.clientSecret) {
            const appearance = { theme: 'stripe' as const, variables: { colorPrimary: '#0077B6' } };
            this.elements = this.stripe.elements({ appearance, clientSecret: this.clientSecret });

            const linkAuthenticationElement = this.elements.create("linkAuthentication", { defaultValues: { email: lead.email } });
            linkAuthenticationElement.mount(this.linkElementRef.nativeElement);

            const paymentElement = this.elements.create("payment", { layout: "tabs" });
            paymentElement.mount(this.paymentElementRef.nativeElement);

            // 5. Escuchar eventos de Stripe para saber cuando la tarjeta está completa
            paymentElement.on('change', (event) => {
              this.isFormValid = event.complete;
              this.cdr.detectChanges(); // <-- Forzamos actualización visual del botón
            });

            // <-- Forzamos a Angular a mostrar las cifras del ticket azul
            this.cdr.detectChanges();
          }
        },
        error: (err) => {
          console.error('[Frontend] Murió la llamada al Backend. Revisa la pestaña de Network o este error:', err);
          this.paymentMessage = `Error de API: ${err.message || 'No se pudo conectar a localhost:3000'}`;
          this.cdr.detectChanges();
        }
      });
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    if (!this.stripe || !this.elements) return;

    this.isProcessing = true;
    this.paymentMessage = '';

    // Grito al DataLayer reportando la compra antes de la redirección
    this.analytics.trackEvent('purchase', {
      value: this.backendAmount / 100,
      currency: 'USD',
      items: [{
        item_name: this.store.selectedPlan(),
        price: this.backendPlanPrice / 100
      }],
      user_data: {
        email: this.store.leadData().email
      }
    });

    // Limpiamos la basura publicitaria tras una compra exitosa
    this.analytics.clearStoredParams();

    const { error } = await this.stripe.confirmPayment({
      elements: this.elements,
      confirmParams: {
        // A donde va el usuario si paga con éxito?
        return_url: window.location.origin + "/onboarding-success"
      },
    });

    if (error) {
      this.paymentMessage = error.message || 'Error desconocido';
    }
    this.isProcessing = false;
  }

  goBack() {
    this.store.prevStep();
  }
}
