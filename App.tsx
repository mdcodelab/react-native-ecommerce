import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButtons from './src/components/buttons/AppButtons';
import AppTextInputs from './src/components/inputs/AppTextInputs';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import AuthNavigator from './src/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontLoaded]=useFonts({
"Nunito-Regular": require("./src/components/fonts/Nunito-Regular.ttf"),
"Nunito-Bold": require("./src/components/fonts/Nunito-Bold.ttf"),
"Nunito-Italic": require("./src/components/fonts/Nunito-Italic.ttf"),
  });

  if (!fontLoaded) {
    return (<ActivityIndicator size="large"></ActivityIndicator>)
  }

  return (
    <>
    <NavigationContainer>
    <AppNavigator/>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


