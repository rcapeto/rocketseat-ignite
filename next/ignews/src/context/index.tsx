import { createContext, useContext, FunctionComponent } from 'react';

import { CtxValues } from '../types';

const AppContext = createContext({} as CtxValues);

export const AppCtxProvider: FunctionComponent = ({ children }) => {
   return(
      <AppContext.Provider
         value={{
            isLogged: false
         }}
      >
         { children }
      </AppContext.Provider>
   );
};

export const useApp = () => useContext(AppContext);