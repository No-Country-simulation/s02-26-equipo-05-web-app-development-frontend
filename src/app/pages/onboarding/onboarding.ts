import { Component, computed, inject } from '@angular/core';
import { OnboardingStore } from './store/onboarding-store';
import { Step1Lead } from './components/step-1-lead/step-1-lead';
import { Step2EntityAndCompany } from './components/step-2-entity-and-company/step-2-entity-and-company';
import { Step3Package } from './components/step-3-package/step-3-package';
import { Step4Checkout } from './components/step-4-checkout/step-4-checkout';
import { Step5Payment } from './components/step-5-payment/step-5-payment';
import { StepIndicator } from './components/step-indicator/step-indicator';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [Step1Lead, Step2EntityAndCompany, Step3Package, Step4Checkout, Step5Payment, StepIndicator],
  templateUrl: './onboarding.html',
  styleUrl: './onboarding.css'
})
export class Onboarding {
  store = inject(OnboardingStore);

  enterClass = computed(() => {
    return this.store.direction() === 'forward' ? 'enter-forward' : 'enter-backward';
  });

  leaveClass = computed(() => {
    return this.store.direction() === 'forward' ? 'leave-forward' : 'leave-backward';
  });
}
