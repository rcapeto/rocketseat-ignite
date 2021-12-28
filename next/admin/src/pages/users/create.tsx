import { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { FormInput, Props as InputProps } from '../../components/Form/Input';

const inputs: InputProps[] = [
   {
      name: "name",
      label: "Nome completo",
      placeholder: "Nome completo",
      inputName: "name",
      type: 'text'
   },
   {
      name: "email",
      label: "E-mail",
      placeholder: "E-mail",
      inputName: "email",
      type: 'email'
   },
   {
      name: "password",
      label: "Senha",
      placeholder: "Senha",
      inputName: "password",
      type: 'password'
   },
   {
      label: "Confirmação senha",
      placeholder: "Confirmação senha",
      inputName: "password_confirmation",
      name: "password_confirmation",
      type: 'password'
   }
];

const CreateUser: NextPage = () => {
   const [formState, setFormState] = useState({
      password: '',
      password_confirmation: '',
      email: '',
      name: ''
   });
   return(
      <Box>
         <Header /> 

         <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
            <SideBar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">

               <Heading size="large" fontWeight="normal">Criar usuário</Heading>

               <Divider my="6" borderColor="gray.700"/>

               <VStack spacing="8">
                  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                     {
                        inputs.slice(0, 2).map((input, key) => (
                           <FormInput 
                              {...input}
                              key={String(key)}
                              value={formState[input.inputName]}
                              onChange={({ target: { value }}) => {
                                 setFormState({
                                    ...formState,
                                    [formState[input.inputName]]: value
                                 })
                              }}
                           />
                        ))
                     }
                  </SimpleGrid>
                  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                     {  
                        inputs.slice(2, inputs.length).map((input, key) => (
                           <FormInput 
                              {...input}
                              key={String(key)}
                           />
                        ))
                     }
                  </SimpleGrid>
               </VStack>

               <Flex 
                  mt="8"
                  justify="flex-end"
               >  
                  <HStack spacing="4">
                     <Link passHref href="/users">
                        <Button colorScheme="whiteAlpha">Cancelar</Button>
                     </Link>
                     <Button colorScheme="pink">Salvar</Button>
                  </HStack>
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};

export default CreateUser;