import { FunctionComponent } from 'react';
import { Input, FormControl, FormLabel, InputProps } from '@chakra-ui/react';

export interface Props extends InputProps {
   inputName: InputName;
   label: string;
};

export type InputName = 'email' | 'password' | 'name' | 'password_confirmation';

export const FormInput: FunctionComponent<Props> = ({ 
   inputName,
   label,
   ...props
}) => {
   return(
      <FormControl>
         <FormLabel htmlFor={inputName}>{label}</FormLabel>
         <Input 
            type={inputName}
            name={inputName}
            bgColor="gray.900"
            variant="filled"
            focusBorderColor="pink.500"
            _hover={{ bgColor: 'gray.900' }}
            size="lg"
            id={inputName}
            {...props}
         />
      </FormControl>
   );
};