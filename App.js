import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {UserCard} from "./src/component";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
      <UserCard title={"halo halo"} />
      <UserCard title={"halo"} />
      <UserCard title={"halos"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#87898E',
    width: 200,
    height: 50,alignItems: 'center', justifyContent: 'center'
  }
});
