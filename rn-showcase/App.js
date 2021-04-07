import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Main from './modules/mobile-app/Main';

export default function App() {
  const onReady = useCallback(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000)
  }, []);

  return <Main onReady={onReady}/>;
}