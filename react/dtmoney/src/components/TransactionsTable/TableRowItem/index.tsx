import { FunctionComponent } from 'react';

import { formatValue } from '../../../utils';

export interface TableRowItemProps {
   title: string;
   value: number;
   category: string;
   date: string;
   id: number;
   type: 'income' | 'outcome';
};

export const TableRowItem: FunctionComponent<TableRowItemProps> = props => {
   const { title, category, date, value, type } = props;

   const currencyValue = formatValue(value);
   const trTitle = `${title} com valor de ${currencyValue}`;

   return(
      <tr title={trTitle}>
         <td>{title}</td>
         <td className={type}>
            {type === 'outcome' ? '-' : ''}{currencyValue}
         </td>
         <td>{category}</td>
         <td>{date}</td>
      </tr>
   );
};