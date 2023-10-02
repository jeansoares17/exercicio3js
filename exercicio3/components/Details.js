import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Details Screen</Text>
      <Text style={styles.paragraph}>Welcome to the Details Screen</Text>

      <Button style={styles.button}title="Go to Contact">Go to Contact</Button>


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
