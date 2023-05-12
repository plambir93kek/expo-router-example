import { Tabs } from 'expo-router';
import React, { ReactElement } from 'react';

export default function AppLayout():ReactElement {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ title: 'Overview' }} />
      <Tabs.Screen name='profile' options={{ headerShown: false }} />
      <Tabs.Screen name='settings' options={{ title: 'Settings' }} />
    </Tabs>
  )
}