import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as FormActions from './transaction.actions';
import {AppState} from './store'
import { Observable } from 'rxjs';
import { FormState } from './transaction.reducer';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'https://6517156f582f58d62d34c6db.mockapi.io/credit/transaction';
  private capability='https://6517156f582f58d62d34c6db.mockapi.io/credit/payment';
  constructor(private store: Store<AppState>,private http: HttpClient) {
   
  }

  products=Observable<any>;
  fetchTransactions(){
    console.log('API uri:',this.apiUrl );
    this.http.get(this.apiUrl)
    .subscribe(
      (response: any) => {
        console.log('API Response:', response);
        this.store.dispatch(FormActions.getTransaction({x:response}));
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );
  }

  addTransactions(prop:any){
    console.log('API uri:',prop );
    this.http.post(this.apiUrl,{...prop})
    .subscribe(
      (response: any) => {
        console.log('API Response:', response);
        this.store.dispatch(FormActions.addTransaction({x:prop}));
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );
  }

  fetchAccountCapability(props: any){
    console.log('API uri:',this.capability );
    this.http.get(this.capability,{...props})
    .subscribe(
      (response: any) => {
        console.log('API Response:', response);
        this.store.dispatch(FormActions.getTransaction({x:response}));
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );
  }

  fechRTN(){
    console.log('API uri:',this.apiUrl );
    this.http.get(this.apiUrl)
    .subscribe(
      (response: any) => {
        console.log('API Response:', response);
        this.store.dispatch(FormActions.getRTN({x:response}));
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );
  }

}
