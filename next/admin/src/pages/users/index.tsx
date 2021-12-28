import { NextPage } from 'next';
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import Link from 'next/link';

import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { UserRow, UserProps } from '../../components/Users/User';
import { Pagination } from '../../components/Pagination';

const users: UserProps[] = [
   {
      name: 'Raphael Capeto',
      email: 'raphaelcapeto@gmail.com',
      register_date: '20 de Fevereiro, 2022',
      id: 1
   },
   {
      name: 'Diego Fernandes',
      email: 'diego.schell.f@gmail.com',
      register_date: '04 de Abril, 2022',
      id: 2
   }
]; 

const Users: NextPage = () => {
   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
   });

   return(
      <Box>
         <Header /> 

         <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
            <SideBar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
               <Flex mb="8" justify="space-between" align="center">
                  <Heading size="large" fontWeight="normal">Usuários</Heading>
                  <Link href="/users/create" passHref>
                     <Button 
                        as="a" 
                        fontSize="sm" 
                        size="sm" 
                        colorScheme="pink" 
                        leftIcon={<Icon as={RiAddLine}/>}
                        cursor="pointer"
                     >
                        Criar novo
                     </Button>
                  </Link>
               </Flex>

               <Table colorScheme="whiteAlpha">
                  <Thead>
                     <Tr>
                        <Th px={['4', '4', '6']} color="gray.300" width="8">
                           <Checkbox colorScheme="pink"/>
                        </Th>

                        <Th>Usuário</Th>
                        {
                           isWideVersion && 
                           <Th>Data de cadastro</Th>
                        }
                        <Th width="8"></Th>
                     </Tr>
                  </Thead>

                  <Tbody>
                     {
                        users.map((user, key) => (
                           <UserRow  
                              key={String(key)} 
                              isWideVersion={isWideVersion}
                              user={user}
                           />
                        ))
                     }
                  </Tbody>
               </Table>

               <Pagination />
            </Box>
         </Flex>
      </Box>
   );
};

export default Users;