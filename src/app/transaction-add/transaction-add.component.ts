import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { FormState } from '../transaction.reducer';


@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrl: './transaction-add.component.css'
})

export class TransactionAddComponent  {
  LastTransaction={}

  constructor(private store: Store<AppState>, private transactionService: TransactionService) { }
  ngOnInit(): void {
    this.store.pipe(select('products')).subscribe((userState: FormState) => {
      this.LastTransaction = userState.lastResponse;
    });
  }
}