import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

export default function MainScreen():ReactElement {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main</Text>
    </View>
  );
}