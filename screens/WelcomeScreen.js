import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  //Welcome Screen
  return (
    <View style={welcomeStyles.container}>
      <View style={welcomeStyles.contentContainer}>
        <Image
          source={require('../assets/little-lemon-logo.png')}
          style={welcomeStyles.logo}
          accessible={true}
          accessibilityLabel='Little Lemon Logo'
        />
        <Text style={welcomeStyles.title}>
          {' '}
          Little Lemon, your Local Mediterranean Bistro{' '}
        </Text>
      </View>
      <Button onPress={() => navigation.navigate('Subscribe')}>
        Newsletter
      </Button>
    </View>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default WelcomeScreen;
