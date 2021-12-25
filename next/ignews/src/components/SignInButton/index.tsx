import { FunctionComponent } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';
import { useApp } from '../../context';

export const SignInButton: FunctionComponent = () => {
   const { isLogged } = useApp();

   const colors = {
      logged: "#04d361",
      notLogged: "#eba417",
      signOut: "#737380"
   }; 

   const buttonText = isLogged ? 'Raphael Capeto' : 'Sign in with Github';

   return(
     <button className={styles.signInButton}>
        <FaGithub color={colors.notLogged} />
         {buttonText}
         {isLogged && <FiX color={colors.signOut} className={styles.closeIcon} /> }
     </button>
   );
};