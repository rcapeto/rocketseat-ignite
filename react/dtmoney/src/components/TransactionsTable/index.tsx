
import { TableRowItem } from './TableRowItem';
import { useApp } from '../../context';
import { Container } from './styles';

export const TransactionsTable = () => {
   const { transactions } = useApp();
   
   return(
      <Container>
         <table>
            <thead>
               <tr>
                  <th>Título</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Data</th>
               </tr>
            </thead>
            <tbody>
               {
                  transactions.map((item) => (
                     <TableRowItem 
                        key={String(item.id)}
                        {...item}
                     />
                  ))
               }
            </tbody>
         </table>
      </Container>
   );
};