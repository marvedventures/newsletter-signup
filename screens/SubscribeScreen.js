import * as React from 'react';
//prettier-ignore
import {View,Text,Image,StyleSheet,TextInput,Pressable,Alert,} from 'react-native';
import Button from '../components/Button';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');
  const isEmailValid = validateEmail(email);
  //Subscribe screen
  return (
    <View style={subscribeStyles.container}>
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={subscribeStyles.logo}
        accessible={true}
        accessibilityLabel='Little Lemon Logo Gray'
      />
      <Text style={subscribeStyles.title}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={subscribeStyles.input}
        placeholder='Type your email'
        placeholderTextColor='gray'
        keyboardType='email-address'
        textContentType='emailAddress'
        onChangeText={setEmail}
        value={email}
      />
      <Pressable>
        <Button
          onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}
          disabled={!isEmailValid}
        >
          Subscribe
        </Button>
      </Pressable>
    </View>
  );
};

const subscribeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
  },
});
export default SubscribeScreen;
