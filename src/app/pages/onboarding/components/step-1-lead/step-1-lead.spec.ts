import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1Lead } from './step-1-lead';

describe('Step1Lead', () => {
  let component: Step1Lead;
  let fixture: ComponentFixture<Step1Lead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1Lead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1Lead);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
