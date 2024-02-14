import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Pressable title="button"
        onPress={() => {
          Alert.alert("Alert Title", "Alert Message", [
            {text:"Yes", onPress: () => console.log("yes")},
            {text:"No", onPress: () => console.log("No")}
          ])
        }}
      />
    </SafeAreaView>
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
