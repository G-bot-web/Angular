import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { FormState } from '../transaction.reducer';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  formData = {
    Amount: '',
    CardAccountNumber: '',
    MessageId: '',
    Status: '',
    TransactionId: '',
    TransactionType: '',
  };
  TotalApiData = clear();

  constructor(private store: Store<AppState>, private transactionService: TransactionService) { }
  ngOnInit(): void {
    this.transactionService.fetchTransactions();
    this.store.pipe(select('products')).subscribe((userState: FormState) => {
      this.TotalApiData = userState.response;
    });
  }

  
  submitForm() {
    console.warn('Calling API:');
    console.warn(this.formData);
    this.transactionService.addTransactions(this.formData);
    this.store.pipe(select('products')).subscribe((userState: FormState) => {
      this.TotalApiData = userState.response;
    });
    this.formData = clear();
  }
}
function clear() {
  return {
    Amount: '',
    CardAccountNumber: '',
    MessageId: '',
    Status: '',
    TransactionId: '',
    TransactionType: '',
  };
}

