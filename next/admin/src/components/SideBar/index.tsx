import { FunctionComponent } from 'react';
import { Box, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react';

import { SideBarNav } from './SideBarNav';
import { Drawer } from '@chakra-ui/core';
import { useSideBarDrawer } from '../../context/SideBarDrawer';

export const SideBar: FunctionComponent = () => {
   const isDrawerSideBar = useBreakpointValue({
      base: true,
      lg: false
   });

   const { isSideBarDrawerOpen, toggleSideBarDrawer } = useSideBarDrawer();
   //error in  chakra
   // if(isDrawerSideBar) {
   //    return(
   //       <Drawer 
   //          isOpen={isSideBarDrawerOpen} 
   //          placement="left"
   //          onClose={toggleSideBarDrawer}
   //       >
   //          <DrawerOverlay>
   //             <DrawerContent bg="gray.800" padding="4">
   //                <DrawerCloseButton mt="6"/>

   //                <DrawerHeader>Navegação</DrawerHeader>

   //                <DrawerBody>
   //                   <SideBarNav />
   //                </DrawerBody>
   //             </DrawerContent>
   //          </DrawerOverlay>
   //       </Drawer>
   //    );
   // }

   if(isDrawerSideBar) {
      return null;
   }

   return(
      <Box
         as="aside"
         w="64"
         mr="8"
      >
        <SideBarNav />
      </Box>
   );
};