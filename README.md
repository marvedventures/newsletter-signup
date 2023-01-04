# Newsletter Signup 

This is a React Native Expo Project with React Navigation.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](little_lemon.gif)

### Links

- URL: [Code](https://github.com/marvedventures/newsletter-signup)
- DEMO:[Demo](https://expo.dev/@marvedventures/littleLemon)

## My process

### Built with

- [React Native](https://reactnative.dev/docs/environment-setup) - React Native using Expo Go
- [React Navigation (Native Stack Navigator)](https://reactnavigation.org/docs/native-stack-navigator) - For Stack Navigator and Moving between Screens
- [StyleSheet](https://reactnative.dev/docs/stylesheet) - For styles

### What I learned

- Create a React Native App using Expo
- Use View, Text, TextInput,Pressable Components
- Create a Welcome Screen
- Create a Subscribe Screen Component
- Create a Button Component
- Setup Stack Navigation
- Create a Root Navigator for NavigationContainer
- Moving between screens using navigation prop
- Configure TextInput component on the Subscribe Screen
- Validate email using Regex; if valid enable the Pressable Component
- Store user input within TextInput as local state by using useState Hook
- Set keyboard types (email-address)
- Update Styles of Components to match Scenario
- Extract All Styles to StyleSheet API

Here is a code snippet:

```RootNavigator.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRoute={SubscribeScreen}>
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Subscribe' component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
```

```WelcomeScreen.js
const WelcomeScreen = ({ navigation }) => {
  // Add Welcome screen code here
  return (
    <View style={welcomeStyles.container}>
      <View style={welcomeStyles.contentContainer}>
        <Image
          source={require('../assets/little-lemon-logo.png')}
          style={welcomeStyles.logo}
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
```

### Useful resources

- [React Native Docs (StyleSheet) ](https://reactnative.dev/docs/stylesheet) - This helped me for all the neccessary React Native styles. I really liked their documentation and will use it going forward.
- [React Native Docs (TextInput) ](https://reactnative.dev/docs/textinput) - This helped me for accepting user inputs.
- [React Navigation Docs (Moving between screens) ](https://reactnavigation.org/docs/navigating/) - This helped me for moving between screens in an app

## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)
