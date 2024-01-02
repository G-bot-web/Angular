import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtpnSideDrawerComponent } from './rtpn-side-drawer.component';

describe('RtpnSideDrawerComponent', () => {
  let component: RtpnSideDrawerComponent;
  let fixture: ComponentFixture<RtpnSideDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtpnSideDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RtpnSideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
