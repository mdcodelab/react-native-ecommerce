import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButtons from './src/components/buttons/AppButtons';
import AppTextInputs from './src/components/inputs/AppTextInputs';
import LoginScreen from './src/screen/auth/LoginScreen';

export default function App() {
  return (
    <>
    <FlashMessage position="top" />
    <AppSaveView style={styles.container}>
      <LoginScreen></LoginScreen>
      <StatusBar style="auto" />
    </AppSaveView>
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


