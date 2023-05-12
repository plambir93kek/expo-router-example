import { useLocalSearchParams } from 'expo-router';
import { Box, Heading } from 'native-base';
import React, { ReactElement } from 'react';

export default function ParamScreen(): ReactElement {
  const { param } = useLocalSearchParams();

  return (
    <Box
      flex={1}
      bg='#fff'
      alignItems='center'
      justifyContent='center'>
      <Heading>Your param is {param}</Heading>
    </Box>
  );
}
