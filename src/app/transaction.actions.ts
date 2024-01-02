import { createAction, props } from '@ngrx/store';

export const getTransaction = createAction('[getTransaction] get all Transaction',props<{ x: any }>());
export const addTransaction = createAction('[addTransaction] add Transaction',props<{ x: any }>());
export const getRTN = createAction('[getRTN] get RTN',props<{ x: any }>());
