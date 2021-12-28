import { useState } from 'react';
import type { NextPage } from 'next'
import { Flex, Button, Stack } from '@chakra-ui/react';

import { FormInput, InputName } from '../components/Form/Input';

interface State {
  email: string;
  password: string;
};

interface Inputs {
  inputName: InputName;
  label: string;
};

const Home: NextPage = () => {
  const [formState, setFormState] = useState<State>({ email: '', password: '' });

  const inputs: Inputs[] = [
    {
      inputName: 'email',
      label: 'E-mail'
    },
    {
      inputName: 'password',
      label: 'Senha'
    }
  ];

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex 
        as="form" 
        width="100%" 
        maxWidth="360px"
        bg="gray.800"
        padding="8"
        borderRadius="8"
        flexDir="column"
      > 
        <Stack spacing="4">
          {
            inputs.map((input, key) => (
              <FormInput 
                inputName={input.inputName}
                label={input.label}
                key={String(key)}
                onChange={({ target: { value }}) => {
                  setFormState({
                    ...formState,
                    [input.inputName]: value
                  });
                }}
                value={formState[input.inputName]}
              />
            ))
          }
        </Stack>

        <Button 
          type="submit" 
          marginTop="6"
          colorScheme="pink"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
