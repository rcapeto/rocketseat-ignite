import { Container, Content } from './styles';
import logoImg from '../../images/assets/logo.svg';

export const Header = () => {
   return(
      <>
         <Container>
            <div className="content-container">
               <Content>
                  <img src={logoImg} alt="dt money" />

                  <button>
                     Nova transação
                  </button>
               </Content>
            
            </div>
         </Container>
      </>
   );
};