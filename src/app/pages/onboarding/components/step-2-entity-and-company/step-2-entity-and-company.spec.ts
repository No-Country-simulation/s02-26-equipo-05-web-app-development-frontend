import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2EntityAndCompany } from './step-2-entity-and-company';

describe('Step2EntityAndCompany', () => {
  let component: Step2EntityAndCompany;
  let fixture: ComponentFixture<Step2EntityAndCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2EntityAndCompany]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2EntityAndCompany);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
