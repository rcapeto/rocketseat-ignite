import incomeImg from '../../images/assets/income.svg';
import outcomeImg from '../../images/assets/outcome.svg';
import totalImg from '../../images/assets/total.svg';

import { SummaryItem, SummaryItemProps } from './SummaryItem';
import { Container } from './styles';
import { useApp } from '../../context';

export const Summary = () => {
   const { values } = useApp();

   const items: SummaryItemProps[] = [
      {
         image: incomeImg,
         text: 'Entradas',
         value: values.income
      },
      {
         image: outcomeImg,
         text: 'Saídas',
         value: values.outcome
      },
      {
         image: totalImg,
         text: 'Total',
         value: values.total,
         isTotal: true
      }
   ];

   return(
      <Container>
        {
           items.map((item, index) => (
            <SummaryItem 
               key={String(index)}
               {...item}
            />
           ))
        }
      </Container>
   );
};