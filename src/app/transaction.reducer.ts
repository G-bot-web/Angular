import { createReducer, on } from '@ngrx/store';
import * as FormActions from './transaction.actions';

export interface FormState {
  response: any;
  lastResponse: any
  error: any;
  rtn:any;
}

export const initialState: FormState = {
  response: null,
  lastResponse: null,
  error: null,
  rtn:null
};

export const formReducer = createReducer(
  initialState,
  on(FormActions.getTransaction, (state, { x }) => ({
    ...state,
    response: x,
    error: null,
  })),
  on(FormActions.addTransaction, (state, { x }) => ({
    ...state,
    response: append(state.response, x),
    lastResponse: x,
    error: null,
  })),
  on(FormActions.getRTN, (state, { x }) => ({
    ...state,
    rtn:x,
  })),

);


function append(_response: any, _x: any): any {
  var temp = _response.map((item: any) => ({
    ...item,
  }));;
  temp.push(_x);
  return temp;
}

