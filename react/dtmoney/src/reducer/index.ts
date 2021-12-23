import { useReducer } from 'react';

import { ReducerActions, ReducerState } from '../@types/app';

const state: ReducerState = {
   transactions: [],
   values: {
      income: 0,
      total: 0,
      outcome: 0
   }
};

const dispatch = (
   state: ReducerState,
   action: ReducerActions
) => {
   switch(action.type) {
      case 'SET_TRANSACTIONS':
         return {
            ...state,
            transactions: action.params.transactions
         };
      case 'SET_VALUES_TOTAL':
         return {
            ...state,
            values: {
               ...state.values,
               total: action.params.total
            }
         };
      case 'SET_VALUES_INCOME':
         return {
            ...state,
            values: {
               ...state.values,
               income: action.params.income
            }
         };
      case 'SET_VALUES_OUTCOME':
         return {
            ...state,
            values: {
               ...state.values,
               outcome: action.params.outcome
            }
         };
      default:
         return state;
   }
};


export const useAppReducer = () => useReducer(dispatch, state);