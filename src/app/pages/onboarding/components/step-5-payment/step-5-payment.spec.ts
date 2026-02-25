import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5Payment } from './step-5-payment';

describe('Step5Payment', () => {
  let component: Step5Payment;
  let fixture: ComponentFixture<Step5Payment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step5Payment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5Payment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
