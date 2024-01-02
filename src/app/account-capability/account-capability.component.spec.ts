import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCapabilityComponent } from './account-capability.component';

describe('AccountCapabilityComponent', () => {
  let component: AccountCapabilityComponent;
  let fixture: ComponentFixture<AccountCapabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountCapabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
