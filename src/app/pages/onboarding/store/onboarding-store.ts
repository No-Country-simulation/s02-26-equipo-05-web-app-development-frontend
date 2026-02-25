import { Injectable, signal, computed } from '@angular/core';

export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface EntityData {
  state: 'wyoming' | 'delaware' | 'florida' | '';
  type: 'llc' | 'c-corp' | '';
  companyName: string;
}

export type PlanType = 'starter' | 'business_box' | 'tax_compliance' | '';

@Injectable({
  providedIn: 'root',
})
export class OnboardingStore {
  // 1. Número de paso actual (del 1 al 5)
  currentStep = signal<number>(1);

  // 2. Datos recolectados en el paso 1
  leadData = signal<LeadData>({ firstName: '', lastName: '', email: '' });

  // 3. Datos del paso 2 (Estado, Tipo y Nombre de Empresa)
  entityData = signal<EntityData>({ state: '', type: '', companyName: '' });

  // 4. Paquete elegido (paso 3)
  selectedPlan = signal<PlanType>('');

  // 💰 STATE DERIVADO (Computed Signals)
  // Reactividad pura: Angular recalcula esto automáticamente si algo cambia
  basePrice = computed(() => {
    switch (this.selectedPlan()) {
      case 'starter': return 299;
      case 'business_box': return 2999;
      case 'tax_compliance': return 1999;
      default: return 0;
    }
  });

  stateFee = computed(() => {
    // Ejemplo: $103 genérico para WY. Podemos ajustar la lógica luego.
    return this.entityData().state ? 103 : 0;
  });

  totalPrice = computed(() => this.basePrice() + this.stateFee());

  // ✅ FUNCIONES DE CONTROL (Actions)
  nextStep() {
    this.currentStep.update(s => Math.min(s + 1, 5));
  }

  prevStep() {
    this.currentStep.update(s => Math.max(s - 1, 1));
  }

  setStep(step: number) {
    this.currentStep.set(step);
  }

  updateLead(data: Partial<LeadData>) {
    this.leadData.update(current => ({ ...current, ...data }));
  }

  updateEntity(data: Partial<EntityData>) {
    this.entityData.update(current => ({ ...current, ...data }));
  }

  setPlan(plan: PlanType) {
    this.selectedPlan.set(plan);
  }
}
