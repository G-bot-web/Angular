import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { TransactionService } from '../transaction.service';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { FormState } from '../transaction.reducer';
/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'app-validate-capability',
  templateUrl: './validate-capability.component.html',
  styleUrl: './validate-capability.component.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule, MatButtonModule,
  ],
})
export class ValidateCapabilityComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = true;
 
  constructor(private _formBuilder: FormBuilder,private store: Store<AppState>, private transactionService: TransactionService) { }

  formData={
    RTN:"",
    AccountNumber:""
  }

  capabilityResult={
    RTN:"",
    AccountNumber:"",
    capability:'',
    status:''
  }

  onSubmit() {
    console.warn('Calling API:');
    console.warn(this.formData);
    this.transactionService.fetchAccountCapability(this.formData);
    this.store.pipe(select('products')).subscribe((userState: FormState) => {
      this.capabilityResult = userState.response[0];
    });
    this.formData = clear();
  }

  
}
function clear() {
  return {
    RTN:"",
    AccountNumber:""
  };
}
