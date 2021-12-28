import { FunctionComponent } from "react";
import { Button } from '@chakra-ui/react';

export interface PaginationItemProps {
   isCurrent?: boolean;
   number: number;
};

export const PaginationItem: FunctionComponent<PaginationItemProps> = ({ 
   number, isCurrent
}) => {
   return(
      <Button 
         size="sm"
         width="4"
         fontSize="xs"
         colorScheme={isCurrent ? 'pink' : ''}
         disabled={isCurrent}
         _disabled={isCurrent ? { bgColor: 'pink.500', cursor: 'default' } : {}}
         _hover={!isCurrent ? { bgColor: 'gray.500' }: {}}
         bg={!isCurrent ? 'gray.700' : ''}
      >
         { number }
      </Button>
   );
};