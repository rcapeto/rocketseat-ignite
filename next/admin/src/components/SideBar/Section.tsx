import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { Box, Text, Stack, Link as ChakraLink, Icon } from '@chakra-ui/react';
import Link from 'next/link';


export interface SectionProps {
   title: string;
   items: LinkItem[];
}

export interface LinkItem {
   icon: IconType;
   text: string;
   href: string;
};

const Section: FunctionComponent<SectionProps> = ({ items, title }) => {
   const getColor = (href: string): string => {
      return (window.location.pathname.includes(href)) ? 'pink.400' : '';
   };

   return(
      <Box>
         <Text
            fontWeight="bold" 
            color="gray.400"
            fontSize="small"
         >
            {title}
         </Text>

         <Stack spacing="4" mt="8" align="stretch">
            {
               items.map((link, key) => (
                  <Link
                     href={link.href}
                     key={String(key)}
                     passHref //para aparecer no canto inferior esquerdo a página
                  >
                     <ChakraLink
                        display="flex"
                        color={getColor(link.href)}
                        alignContent="center"
                     >
                        <Icon 
                           as={link.icon}
                           fontSize="20"
                        />

                        <Text ml="4" fontWeight="medium">
                           {link.text}
                        </Text>
                     </ChakraLink>
                  </Link>
               ))
            }
         </Stack>
      </Box>
   );
};

export default Section;