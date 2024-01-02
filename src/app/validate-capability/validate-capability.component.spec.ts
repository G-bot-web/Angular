import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCapabilityComponent } from './validate-capability.component';

describe('ValidateCapabilityComponent', () => {
  let component: ValidateCapabilityComponent;
  let fixture: ComponentFixture<ValidateCapabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateCapabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
