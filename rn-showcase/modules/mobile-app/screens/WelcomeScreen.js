import React from 'react';
import { Text, View, Button } from 'react-native';

const WelcomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Login" onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

export default WelcomeScreen;