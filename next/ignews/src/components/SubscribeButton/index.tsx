import { FunctionComponent } from 'react';

import styles from './styles.module.scss';

interface Props {
   priceId: string;
};

export const SubscribeButton: FunctionComponent<Props> = ({ 
   priceId
}) => {
   return(
      <button className={styles.subscribeButton} type="button">
         Subscribe
      </button>
   );
};