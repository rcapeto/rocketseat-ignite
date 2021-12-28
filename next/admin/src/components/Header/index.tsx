import { FunctionComponent } from 'react';
import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { UserContent } from './UserContent';
import { HeaderRightContent } from './HeaderRightContent';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { useSideBarDrawer } from '../../context/SideBarDrawer';

export const Header: FunctionComponent = () => {
   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
   });

   const { toggleSideBarDrawer } = useSideBarDrawer();

   return(  
      <Flex 
         w="100%" 
         as="header" 
         maxW="1280" 
         h="20"
         marginX="auto"
         mt="4"
         align="center"
         paddingX="6"
      >
         {
            !isWideVersion && (
               <IconButton 
                  icon={<Icon as={RiMenuLine}/>}
                  fontSize="20"
                  variant="unstyled"
                  onClick={toggleSideBarDrawer}
                  aria-label="Open navigation"
                  mr="2"
               />
            )
         }
         
         <Logo />

         {
            isWideVersion && <SearchBox />
         }

         <HeaderRightContent>
            <UserContent 
               showProfileData={isWideVersion}
            />
         </HeaderRightContent>
      </Flex>
   );
};