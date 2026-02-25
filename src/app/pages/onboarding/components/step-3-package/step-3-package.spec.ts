import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3Package } from './step-3-package';

describe('Step3Package', () => {
  let component: Step3Package;
  let fixture: ComponentFixture<Step3Package>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3Package]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3Package);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
