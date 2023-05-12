import { useRouter, useSegments } from 'expo-router';
import { noop } from 'lodash';
import React, { createContext, ReactElement, useEffect, useState } from 'react';

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  userName?: string;
  logOut: () => void;
  logIn: (name: string) => void;
    }>({
      isAuthenticated: false,
      logOut: noop,
      logIn: noop
    });

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const segments = useSegments();
  const router = useRouter()
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState<string>();

  const handleLogIn = (name: string):void => {
    setIsAuthenticated(true);
    setUserName(name);
  };

  const handleLogOut = ():void => {
    setIsAuthenticated(false);
    setUserName(undefined);
  };

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !userName &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/sign-in');
    } else if (userName && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/');
    }
  }, [userName, segments]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, logIn: handleLogIn, logOut: handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
}
