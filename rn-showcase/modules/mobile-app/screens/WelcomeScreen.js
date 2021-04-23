import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import { Image, View, Button, Text } from 'react-native';
import Modal from "react-native-modal";

const logoImage = require('../../../assets/icon.png')

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffff',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo: {
    height: 180,
    width: 180
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalInnerContainer: {
    backgroundColor: '#ffffff',
    height: '50%'
  }
})

const WelcomeScreen = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal 
        isVisible={modalVisible}
        style={styles.modal}
        // coverScreen={this.state.coverScreen}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => {}}
        swipeDirection="left"
      >
        <View style={styles.modalInnerContainer}>
            <Text>I am the modal content!</Text>
            <Button 
                onPress={() => setModalVisible(false)} 
                title="Close Modal"
            />
        </View>
      </Modal>
      <View style={styles.screen}>
        <Image source={logoImage} style={styles.logo}/>
        <Button title="Login" onPress={() => setModalVisible(true)}/>
        <Button title="Getting Started" onPress={() => navigation.navigate('Home')}/>
        
      </View>
    </>
  );
}

export default WelcomeScreen;