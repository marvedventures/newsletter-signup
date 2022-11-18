import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';

// Wrapping of NavigationContainer around Root Navigator
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
