import { Component, inject } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common'; // Útiles para formatear $ y Textos
import { OnboardingStore, PlanType } from '../../store/onboarding-store';

@Component({
  selector: 'app-step-4-checkout',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './step-4-checkout.html',
  styleUrl: './step-4-checkout.css',
})
export class Step4Checkout {
  store = inject(OnboardingStore);

  // Leemos todo el cerebro para mostrarlo en pantalla
  company = this.store.entityData;
  lead = this.store.leadData;
  plan = this.store.selectedPlan;

  basePrice = this.store.basePrice;
  stateFee = this.store.stateFee;
  totalPrice = this.store.totalPrice;

  // Helper visual para mostrar el nombre bonito del plan
  getPlanName(planId: string): string {
    switch (planId) {
      case 'starter': return 'Starter';
      case 'business_in_a_box': return 'Business-in-a-Box™';
      case 'tax_compliance': return 'Tax Compliance';
      default: return 'Plan no seleccionado';
    }
  }

  // Sirven para los botones de "Edit" con el lapicito
  goToStep(step: number) {
    this.store.setStep(step);
  }

  onSubmit() {
    // Aquí luego llamaremos a Stripe
    this.store.nextStep();
  }
}
