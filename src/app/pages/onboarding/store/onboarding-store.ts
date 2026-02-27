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

export type PlanType = 'starter' | 'business_in_a_box' | 'tax_compliance' | '';

@Injectable({
  providedIn: 'root',
})
export class OnboardingStore {
  currentStep = signal<number>(1);
  direction = signal<'forward' | 'backward'>('forward'); // 👈 agregado
  leadId = signal<string>(''); // UUID de la BD asignado al lead

  leadData = signal<LeadData>({ firstName: '', lastName: '', email: '' });

  entityData = signal<EntityData>({ state: '', type: '', companyName: '' });

  selectedPlan = signal<PlanType>('');

  basePrice = computed(() => {
    switch (this.selectedPlan()) {
      case 'starter': return 299;
      case 'business_in_a_box': return 2999;
      case 'tax_compliance': return 1999;
      default: return 0;
    }
  });

  stateFee = computed(() => {
    return this.entityData().state ? 103 : 0;
  });

  totalPrice = computed(() => this.basePrice() + this.stateFee());

  nextStep() {
    this.direction.set('forward'); // 👈 agregado
    this.currentStep.update(s => Math.min(s + 1, 5));
  }

  prevStep() {
    this.direction.set('backward'); // 👈 agregado
    this.currentStep.update(s => Math.max(s - 1, 1));
  }

  setStep(step: number) {
    this.currentStep.set(step);
  }

  setLeadId(id: string) {
    this.leadId.set(id);
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
