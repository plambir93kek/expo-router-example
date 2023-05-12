import { Slot } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import React, { ReactElement } from 'react';
import { AuthProvider } from '../shared/auth-provider';

export default function Root(): ReactElement {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
