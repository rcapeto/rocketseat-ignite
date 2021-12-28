import { FunctionComponent } from "react";
import { Button, Stack, Box } from "@chakra-ui/react";

import { PaginationItem, PaginationItemProps } from './PaginationItem';

const paginations: PaginationItemProps[] = [
   {
      number: 1,
      isCurrent: true,
   },
   {
      number: 2,
   },
   {
      number: 3
   },
   {
      number: 4,
   },
   {
      number: 5,
   }
];

export const Pagination: FunctionComponent = () => {
   return(
      <Stack 
         direction={["column", "row"]} 
         mt="8" 
         justify="space-between" 
         align="center" 
         spacing="6"
      >
         <Box>
            <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
         </Box>

         <Stack direction="row" spacing="2">
           {
              paginations.map((pagination, key) => (
                 <PaginationItem 
                  {...pagination}
                  key={String(key)}
                 />
              ))
           }
         </Stack>
      </Stack>
   );
};