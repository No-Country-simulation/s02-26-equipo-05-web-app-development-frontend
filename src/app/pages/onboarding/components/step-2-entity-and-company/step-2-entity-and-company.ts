import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { OnboardingStore } from '../../store/onboarding-store';

@Component({
  selector: 'app-step-2-entity-and-company',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './step-2-entity-and-company.html',
  styleUrl: './step-2-entity-and-company.css',
})
export class Step2EntityAndCompany implements OnInit {
  store = inject(OnboardingStore);
  fb = inject(FormBuilder);

  entityForm!: FormGroup;

  ngOnInit() {
    const currentData = this.store.entityData();

    this.entityForm = this.fb.nonNullable.group({
      state: [currentData.state || '', Validators.required],
      type: [currentData.type || '', Validators.required],
      companyName: [currentData.companyName || '', Validators.required]
    });
  }

  // Helpers para el HTML (cambiar visualmente las tarjetas seleccionadas)
  selectState(state: 'wyoming' | 'delaware' | 'florida') {
    this.entityForm.patchValue({ state });
  }

  selectType(type: 'llc' | 'c-corp') {
    this.entityForm.patchValue({ type });
  }

  goBack() {
    // Si Carlos retrocede, igual guardamos lo que haya tipeado para no perderlo
    this.store.updateEntity(this.entityForm.getRawValue());
    this.store.prevStep();
  }

  onSubmit() {
    if (this.entityForm.valid) {
      this.store.updateEntity(this.entityForm.getRawValue());
      this.store.nextStep();
    } else {
      this.entityForm.markAllAsTouched();
    }
  }
}
