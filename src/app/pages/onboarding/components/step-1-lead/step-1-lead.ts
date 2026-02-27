import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OnboardingStore } from '../../store/onboarding-store';
import { environment } from '../../../../../environments/environment';
import { AnalyticsService } from '../../../../services/analytics.service';

@Component({
  selector: 'app-step-1-lead',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-1-lead.html',
  styleUrl: './step-1-lead.css',
})
export class Step1Lead implements OnInit {
  store = inject(OnboardingStore);
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  cdr = inject(ChangeDetectorRef);
  analytics = inject(AnalyticsService);

  leadForm!: FormGroup;
  isProcessing = false;
  errorMessage = '';

  ngOnInit() {
    const currentData = this.store.leadData();

    this.leadForm = this.fb.nonNullable.group({
      firstName: [currentData.firstName, Validators.required],
      lastName: [currentData.lastName, Validators.required],
      email: [currentData.email, [Validators.required, Validators.email]],
      phone: [currentData.phone || '']
    });
  }

  onSubmit() {
    if (this.leadForm.valid) {
      this.isProcessing = true;
      this.errorMessage = '';
      this.leadForm.disable(); // Previene doble click

      const rawData = this.leadForm.getRawValue();
      const storedParams = this.analytics.getStoredParams();

      // Mapeamos los datos al formato del DTO esperado por el Backend (snake_case)
      const payload = {
        first_name: rawData.firstName,
        last_name: rawData.lastName,
        email: rawData.email,
        phone: rawData.phone,
        // Y aquí mandamos los UTMs que haya atrapado el Home
        utm_source: storedParams['utm_source'] || undefined,
        utm_medium: storedParams['utm_medium'] || undefined,
        utm_campaign: storedParams['utm_campaign'] || undefined,
        // Mandamos las llaves maestras de Server-Side Tracking
        fbclid: storedParams['fbclid'] || undefined,
        gclid: storedParams['gclid'] || undefined,
      };

      this.http.post<any>(`${environment.apiUrl}/leads`, payload).subscribe({
        next: (response) => {
          // El backend asume retornar el Lead con su 'id' (UUID)
          console.log('[Frontend] Lead guardado exitosamente:', response);
          if (response && response.id) {
            this.store.setLeadId(response.id);

            // 🔥 Evento de Seguimiento para GA4 / Meta
            this.analytics.trackEvent('lead', {
              lead_id: response.id,
              email: rawData.email,
              has_phone: !!rawData.phone
            });
          }
          this.store.updateLead(rawData);
          this.store.nextStep();
        },
        error: (err) => {
          console.error('[Frontend] Error creando el Lead:', err);
          this.errorMessage = 'No pudimos registrar tus datos. Por favor, intenta nuevamente.';
          this.isProcessing = false;
          this.leadForm.enable();
          this.cdr.detectChanges();
        }
      });
    } else {
      this.leadForm.markAllAsTouched();
    }
  }
}
