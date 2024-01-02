import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RtpnNavBarComponent } from './rtpn-nav-bar/rtpn-nav-bar.component';
import { RtpnSideDrawerComponent } from './rtpn-side-drawer/rtpn-side-drawer.component';
import { CommonModule } from '@angular/common';
import { NewFiOnboardingComponent } from './new-fi-onboarding/new-fi-onboarding.component';
import { AccountCapabilityComponent } from './account-capability/account-capability.component';
import { ValidateCapabilityComponent } from './validate-capability/validate-capability.component';
import { AddCapabilityComponent } from './add-capability/add-capability.component';
@NgModule({
  declarations: [
    AppComponent,
    TransactionAddComponent,
    TransactionListComponent,
    
  ],
  imports: [AddCapabilityComponent,ValidateCapabilityComponent,AccountCapabilityComponent,CommonModule,BrowserModule, HttpClientModule, FormsModule, StoreModule.forRoot(reducers), BrowserAnimationsModule,RtpnNavBarComponent,RtpnSideDrawerComponent,NewFiOnboardingComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
