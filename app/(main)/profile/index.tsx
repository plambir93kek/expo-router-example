import { Stack, useNavigation, useRouter } from 'expo-router';
import { Box, Button, Heading, Input, VStack } from 'native-base';
import React, { ReactElement, useState } from 'react';

export default function ProfileMain():ReactElement {
  const [param, setParam] = useState('');
  const router = useRouter();
  const nav = useNavigation()
  console.log(nav.isFocused())
  const handleNavigate = ():void => {
    router.push({pathname: '/(main)/profile/param', params: {param}})
  }

  return (
    <Box
      flex={1}
      bg='#fff'
      alignItems='center'
      justifyContent='center'>
      <Stack.Screen options={{title: 'Profile Enter Params'}}/>
      <VStack
        alignItems='center'
        space='8'
        mt='4'
        px='8'>
        <Heading color='emerald.500'>Enter your params</Heading>
        <Input
          onChangeText={setParam}
          size='xl'
          w={{
            base: '75%',
            md: '25%'
          }}
        />
        <Button onPress={handleNavigate}>
          Navigate with params
        </Button>
      </VStack>
    </Box>
  );
}