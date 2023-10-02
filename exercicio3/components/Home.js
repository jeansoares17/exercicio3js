import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Home Screen</Text>
      <Text style={styles.paragraph}>Welcome to the Home Screen</Text>

      <Button style={styles.button}title="Go to details">Go to Details</Button>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin:6,
    fontSize: 18,
    textAlign: 'center',
  },
   button: {
    fontSize: 14,
    textAlign: 'center',
    border: 'none',
    color:'blue'
  },
});
