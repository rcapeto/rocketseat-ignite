import { FunctionComponent } from 'react';

import { formatValue } from '../../../utils';

export interface SummaryItemProps {
   text: string;
   image: string;
   value: number;
   isTotal?: boolean;
};

export const SummaryItem: FunctionComponent<SummaryItemProps> = props => {
   return(
      <div className={props.isTotal ? 'hightlight': ''}>
         <header>
            <p>{props.text}</p>
            <img 
               src={props.image}
               alt={props.text}
            />
         </header>

         <strong>{formatValue(props.value)}</strong>
      </div>
   );
};