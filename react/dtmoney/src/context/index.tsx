import { createContext, useContext, FunctionComponent, useEffect, useState } from 'react';

import { AppContextValues, Transaction } from '../@types/app';
import { useAppReducer } from '../reducer';
import { useApi } from '../api';

const AppContext = createContext({} as AppContextValues);

export const AppCtxProvider: FunctionComponent = ({ children }) => {
   const [appState, appDispatch] = useAppReducer();
   const { getTransactions } = useApi();

   const updateTransactions = (transaction: Transaction) => {
      appDispatch({
         type: 'SET_TRANSACTIONS',
         params: {
            transactions: [...appState.transactions, transaction]
         }
      });
   };

   const handleGetTransactions = async () => {
      const transactions = await getTransactions();

      Array.isArray(transactions) &&
      appDispatch({
         type: 'SET_TRANSACTIONS',
         params: {
            transactions
         }
      });
   };

   const handleCalculateValues = () => {
      if(appState.transactions.length) {
         const values = {
            total: 0,
            outcome: 0,
            income: 0
         };
         for(const transaction of appState.transactions) {
            values.total += transaction.value;

            if(transaction.type == 'income') {
               values.income += transaction.value;
            } else {
               values.outcome += transaction.value;
            }
         }
         appDispatch({ type: 'SET_VALUES_INCOME', params: { income: values.income }});
         appDispatch({ type: 'SET_VALUES_OUTCOME', params: { outcome: values.outcome }});
         appDispatch({ type: 'SET_VALUES_TOTAL', params: { total: values.total }});
      }
   };

   useEffect(() => {
      handleGetTransactions();
   }, []);

   useEffect(() => {
      appState.transactions.length && handleCalculateValues();
   }, [appState.transactions]);
   
   return(
      <AppContext.Provider 
         value={{
            ...appState,
            updateTransactions
         }}
      >
         { children }
      </AppContext.Provider>
   );
};

export const useApp = () => useContext(AppContext);