import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

import store from '../core/store'

// navigation
import { updateNavigation } from './navigation'

const ScreenSelector  = ({ store }) => {
  const { app: { isUserLoggedIn }} = store.getState();
  return isUserLoggedIn ? <HomeStack /> : <AuthStack />;
}

const Main = ({ onReady }) => {
  useEffect(() => {
    onReady();
  }, []);
  return  (
    <Provider store={store}>
        <NavigationContainer onStateChange={state => updateNavigation(store, state)}>
          <ScreenSelector store={store}/>
        </NavigationContainer>
    </Provider>
  );
}

export default Main;