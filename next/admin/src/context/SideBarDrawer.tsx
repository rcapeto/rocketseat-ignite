import { useRouter } from 'next/router';
import { createContext, FunctionComponent, useContext, useEffect, useState } from 'react';

interface CtxValues {
   toggleSideBarDrawer: () => void;
   isSideBarDrawerOpen: boolean;
};

const SideBarDrawerCtx = createContext({} as CtxValues);

export const SideBarDrawerProvider: FunctionComponent = ({ children }) => {
   const [isSideBarDrawerOpen, setIsSideBarDrawerOpen] = useState<boolean>(false);
   const router = useRouter();

   useEffect(() => {
      setIsSideBarDrawerOpen(false);
   }, [router.asPath]);

   const toggleSideBarDrawer = () => {
      setIsSideBarDrawerOpen(!isSideBarDrawerOpen);
   };

   return(
      <SideBarDrawerCtx.Provider 
         value={{
            isSideBarDrawerOpen,
            toggleSideBarDrawer
         }}
      >
         { children }
      </SideBarDrawerCtx.Provider>
   );
};

export const useSideBarDrawer = () => useContext(SideBarDrawerCtx);