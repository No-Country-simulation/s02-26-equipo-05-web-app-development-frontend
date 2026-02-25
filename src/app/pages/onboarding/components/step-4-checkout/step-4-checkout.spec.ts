import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4Checkout } from './step-4-checkout';

describe('Step4Checkout', () => {
  let component: Step4Checkout;
  let fixture: ComponentFixture<Step4Checkout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4Checkout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4Checkout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
