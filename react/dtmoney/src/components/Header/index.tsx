import { FunctionComponent } from 'react';

import { Container, Content } from './styles';
import logoImg from '../../images/assets/logo.svg';

interface HeaderProps {
   onOpenTransactionModal: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ({ onOpenTransactionModal }) => {
   return(
      <Container>
         <div className="content-container">
            <Content>
               <img src={logoImg} alt="dt money" />

               <button
                  onClick={onOpenTransactionModal}
               >
                  Nova transação
               </button>
            </Content>
         </div>
      </Container>
   );
};