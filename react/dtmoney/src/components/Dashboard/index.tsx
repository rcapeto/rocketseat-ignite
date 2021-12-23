import { Summary } from '../Summary';

import { Container } from './styles';
import { TransactionsTable } from '../TransactionsTable';

export const Dashboard = () => {
   return(
      <div className="content-container">
         <Container>
            <Summary />
            <TransactionsTable />
         </Container>
      </div>
   );
};