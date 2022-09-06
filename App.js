import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Square from './comple/Square';

export default function App() {
  return (
    <View style={styles.container}>
      <Square color="#7ce0f9" Text='Square 1' />
      <Square color="#4cc2c2" Text='Square 2'/>
      <Square color="#ff637c" Text='Square 3'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
