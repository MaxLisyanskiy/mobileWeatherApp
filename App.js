import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppHeader from './components/AppHeader';
import Loader from './components/Loader';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppHeader/> */}
      <Loader/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
