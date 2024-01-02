import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { NewFiOnboardingComponent } from '../new-fi-onboarding/new-fi-onboarding.component';
import { AccountCapabilityComponent } from '../account-capability/account-capability.component';

/** @title Basic drawer */
@Component({
  selector: 'app-rtpn-side-drawer',
  templateUrl: './rtpn-side-drawer.component.html',
  styleUrl: './rtpn-side-drawer.component.css',
  standalone: true,
  imports: [AccountCapabilityComponent,MatSidenavModule,MatListModule,NgSwitch, NgSwitchCase,NgSwitchDefault,NewFiOnboardingComponent],
})
export class RtpnSideDrawerComponent {
  selectedTab="x";
  typesOfService: string[] = ['New FI On-Boarding', 'Transaction', 'Stastics', 'AccountCapability', 'Splunk Monitor'];
  
  SelectedTabx(tab: string){
    this.selectedTab= tab;
  }
}
