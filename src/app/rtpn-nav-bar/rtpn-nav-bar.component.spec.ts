import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtpnNavBarComponent } from './rtpn-nav-bar.component';

describe('RtpnNavBarComponent', () => {
  let component: RtpnNavBarComponent;
  let fixture: ComponentFixture<RtpnNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtpnNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RtpnNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
