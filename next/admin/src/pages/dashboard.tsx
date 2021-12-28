import { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { DashboardPage } from '../components/DashboardPage';

const Dashboard: NextPage = () => {
   return(
      <Flex direction="column" h="100vh">
         <Header />
         
         <Flex w="100%" maxWidth="1280" my="6" mx="auto" px="6">
            <SideBar />
            <DashboardPage />
         </Flex>

      </Flex>
   );
};

export default Dashboard;