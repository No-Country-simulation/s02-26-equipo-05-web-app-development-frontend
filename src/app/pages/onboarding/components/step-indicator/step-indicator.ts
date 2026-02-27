import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-step-indicator',
  standalone: true,
  imports: [],
  templateUrl: './step-indicator.html',
  styleUrl: './step-indicator.css',
})
export class StepIndicator {
  // Recibe de su Padre (OnboardingComponent) en qué paso estamos
  currentStep = input.required<number>();

  // Total de pasos estático
  totalSteps = 5;

  // Matemática reactiva: Calcula qué % del ancho debe llenarse de azul
  progressWidth = computed(() => {
    return (this.currentStep() / this.totalSteps) * 100;
  });
}
