import { createServer, Model } from 'miragejs';
import { Transaction } from '../@types/app';

const transactions: Transaction[] = [
   {
      title: 'Desenvolvimento web',
      category: 'Desenvolvimento',
      date: '16/12/2021',
      value: 5400,
      type: 'income',
      id: 1,
   },
   {
      title: 'Conta de Luz',
      category: 'Conta',
      date: '06/12/2021',
      value: 320,
      type: 'outcome',
      id: 2
   },
   {
      title: 'Conta Internet',
      category: 'Conta',
      date: '10/12/2021',
      value: 400,
      type: 'outcome',
      id: 3
   }
]

export function startServer() {
   createServer({
      models: {
         transactions: Model,
      },

      seeds(server) {
         server.db.loadData({
            transactions,
         });
      },
      routes() { 
         this.namespace = 'api';
         this.get('/transactions', () => {
            return this.schema.all('transactions');
         });

         this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create('transactions', data);
         });
      }
   });
}
