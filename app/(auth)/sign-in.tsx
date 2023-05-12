import { MaterialIcons } from '@expo/vector-icons';
import { Box, Button, Heading, Icon, Input, VStack } from 'native-base';
import React, { ReactElement, useContext, useState } from 'react';
import { AuthContext } from '../../shared/auth-provider';

export default function SignIn(): ReactElement {
  const [name, setName] = useState('');

  const {logIn} = useContext(AuthContext);

  const handleLogIn = ():void => {
    if(name){
      logIn(name)
    }
  }

  return (
    <Box
      flex={1}
      bg='#fff'
      alignItems='center'
      justifyContent='center'>
      <VStack
        alignItems='center'
        space='8'
        mt='4'
        px='8'>
        <Heading color='emerald.500'>Sign In</Heading>
        <Input
          onChangeText={setName}
          size='xl'
          w={{
            base: '75%',
            md: '25%'
          }}
          InputLeftElement={<Icon
            as={<MaterialIcons name='person' />}
            size={5}
            ml='2'
            color='muted.400' />}
          placeholder='Name'
        />
        <Button onPress={handleLogIn}>
          Log In
        </Button>
      </VStack>
    </Box>
  );
}
