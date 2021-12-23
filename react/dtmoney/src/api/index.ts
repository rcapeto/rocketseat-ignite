import { Transaction } from '../@types/app';

export const useApi = () => {
   const base_url = 'http://localhost:3000/api';

   async function getTransactions(): Promise<Transaction[]> {
      try {
         const response = await fetch(`${base_url}/transactions`);
         const data = await response.json();
         return data;
      } catch(err) {
         console.error('Error[getTransactions]', { 
            err,
            message: 'Error in get Route, please try again later!'
         });
         return [];
      }
   }

   function postTransaction(transaction: Transaction) {

   }

   return {
      getTransactions,
      postTransaction,
   }
};