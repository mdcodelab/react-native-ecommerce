import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSaveView from './src/components/views/AppSaveView';

export default function App() {
  return (
    <AppSaveView style={styles.container}>
      <AppText variant="medium">Hello World!</AppText>
      <AppText variant="bold">Hello World!</AppText>
      <StatusBar style="auto" />
    </AppSaveView>
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


