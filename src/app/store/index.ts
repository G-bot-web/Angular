// index.ts
import { ActionReducerMap } from '@ngrx/store';
import * as fromProduct from '../transaction.reducer';

export interface AppState {
  products: fromProduct.FormState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProduct.formReducer,
};
