import { Component, inject } from '@angular/core';
import { NgClass, UpperCasePipe } from '@angular/common';
import { OnboardingStore, PlanType } from '../../store/onboarding-store';

@Component({
  selector: 'app-step-3-package',
  standalone: true,
  imports: [NgClass, UpperCasePipe],
  templateUrl: './step-3-package.html',
  styleUrl: './step-3-package.css',
})
export class Step3Package {
  store = inject(OnboardingStore);

  // Exponemos las tarifas derivadas desde el store para el resumen de arriba
  basePrice = this.store.basePrice;
  stateFee = this.store.stateFee;
  totalPrice = this.store.totalPrice;

  selectPlan(plan: PlanType) {
    this.store.setPlan(plan);
  }

  goBack() {
    this.store.prevStep();
  }

  onSubmit() {
    // Solo permitimos avanzar si hay un plan seleccionado
    if (this.store.selectedPlan() !== '') {
      this.store.nextStep();
    }
  }
}
