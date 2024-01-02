import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ValidateCapabilityComponent } from '../validate-capability/validate-capability.component';
import { AddCapabilityComponent } from '../add-capability/add-capability.component';
@Component({
  selector: 'app-account-capability',
  standalone: true,
  imports: [AddCapabilityComponent,ValidateCapabilityComponent,MatCardModule, MatButtonModule,NgSwitch, NgSwitchCase,NgSwitchDefault],
  templateUrl: './account-capability.component.html',
  styleUrl: './account-capability.component.css'
})
export class AccountCapabilityComponent {
  selectedTab="x";
  typesOfService: string[] = ['Add Account Capability', 'Validate Capability', 'Validate Capability', 'List All Capability'];
  
  SelectedTabx(tab: string){
    this.selectedTab= tab;
  }
}
