import { FunctionComponent } from 'react';

import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export const Header: FunctionComponent = () => {
   const links = [
      {
         linkName: 'Home',
         anchor: '/'
      },
      {
         linkName: 'Posts',
         anchor: '/'
      }
   ];

   return(
      <header className={styles.headerContainer}>
         <div className={styles.headerContent}>
            <img src="/images/logo.svg" alt="ig.news" />

            <nav>
               <ul>
                  {links.map((link, index) => (
                     <li key={String(index)}>
                        <a 
                           href={link.anchor}
                        >
                           {link.linkName}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>

            <SignInButton />

         </div>
      </header>
   );
};