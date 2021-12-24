export interface Transaction {
   title: string;
   value: number;
   category: string;
   date: string;
   type: 'income' | 'outcome';
   id: number;
};

export interface ReducerState {
   transactions: Transaction[];
   values: {
      total: number;
      income: number;
      outcome: number;
   }
};

export type ReducerActions = 
   { type: 'SET_TRANSACTIONS', params: { transactions: Transaction[] }} |
   { type: 'SET_VALUES_TOTAL', params: { total: number }} |
   { type: 'SET_VALUES_INCOME', params: { income: number }} |
   { type: 'SET_VALUES_OUTCOME', params: { outcome: number } };

export interface AppContextValues extends ReducerState {
   updateTransactions: (transaction: Transaction) => void;
};