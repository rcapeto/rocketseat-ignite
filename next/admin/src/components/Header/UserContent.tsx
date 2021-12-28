import { FunctionComponent } from 'react';
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
   showProfileData: boolean | undefined;
}

export const UserContent: FunctionComponent<ProfileProps> = ({ showProfileData }) => {
   const user = {
      name: 'Raphael Capeto',
      email: 'raphaelcapeto@gmail.com',
      avatar: 'https://github.com/rcapeto.png'
   };

   return(
      <>
         <Flex
            align="center"
         >

            {
               showProfileData && (
                  <Box marginRight="4" textAlign="right">
                     <Text>{user.name}</Text>
                     <Text color="gray.300" fontSize="small">{user.email}</Text>
                  </Box>
               )
            }

            <Avatar 
               size="md"
               name={user.name}
               src={user.avatar}
            />
         </Flex>
      </>
   );
};