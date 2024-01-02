import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFiOnboardingComponent } from './new-fi-onboarding.component';

describe('NewFiOnboardingComponent', () => {
  let component: NewFiOnboardingComponent;
  let fixture: ComponentFixture<NewFiOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFiOnboardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFiOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
