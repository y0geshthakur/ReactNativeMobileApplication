import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.backgroundImage}>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logoImage} />
        <Text style={styles.title}>Let's get your Vehicle Parked-IN</Text>
        <View style={styles.buttonRow}>
          <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} style={styles.button} />
          <Button title="Login" onPress={() => navigation.navigate('Login')} style={styles.button} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
    padding: 20,
    borderRadius: 8,
  },
  logoImage: {
    width: 120,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flex: 1,
    margin: 10,
  },
});

export default StartScreen;