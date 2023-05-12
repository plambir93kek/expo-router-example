import { Box } from 'native-base';
import React, { ReactElement } from 'react';
import { Text} from 'react-native';

export default function Settings():ReactElement {

  return (
    <Box
      flex={1}
      bg='#fff'
      alignItems='center'
      justifyContent='center'>
      <Text>Settings</Text>
    </Box>
  );
}