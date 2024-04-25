import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
      source={require('./assets/Logo.png')}
      />
      <Text>Live happier and healthier by learning the fundamentals of meditation and mindfulness</Text>
      <Image
      source={require('./assets/Yoga.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 200
    // justifyContent: 'center',
  },
  logo: {
    height: 200
  }
});
