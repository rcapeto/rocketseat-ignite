import { FunctionComponent } from 'react';
import { Tr, Td, Box, Checkbox, Text, Button, Icon } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

export interface UserRowProps {
   user: UserProps;
   isWideVersion: boolean | undefined;
};

export interface UserProps {
   name: string;
   email: string;
   register_date: string;
   id: number;
}

export const UserRow: FunctionComponent<UserRowProps> = ({ user , isWideVersion }) => {
   const { name, email, register_date } = user;

   return(
      <Tr>
         <Td px={['4', '4', '6']}>
            <Checkbox colorScheme="pink"/>
         </Td>
         <Td>
            <Box>
               <Text fontWeight="bold">{name}</Text>
               <Text fontSize="small" color="gray.300">{email}</Text>
            </Box>
         </Td>
         {
            isWideVersion && <Td>{register_date}</Td>
         }

         {
            isWideVersion && 
            <Td>
               <Button 
                  as="a" 
                  fontSize="sm" 
                  size="sm" 
                  colorScheme="purple" 
                  leftIcon={<Icon as={RiPencilLine}/>}
                  cursor="pointer"
               >
                  Editar
               </Button>
            </Td>
         }
      </Tr>
   );
};