import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {UserCard} from "./src/component";
import {useEffect, useState} from "react";
import Separator from "./src/component/Separator";
import DetailLoginInput from "./src/component/DetailLoginInput";

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')  ;
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState('');

  useEffect(() => {
    return () => {
      console.log('username berubah menjadi:', username)
    };
  }, [username]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Data User</Text>

      <StatusBar style="auto" />
      <UserCard title={'Username'} value={username} />
      <Separator size={2} position={'vertical'} />
      <DetailLoginInput value={username} onChangeText={(value) => setUsername(value)} />

      <Separator size={10} position={'vertical'} />

      <UserCard title={"Password"} value={password} />
      <Separator size={2} position={'vertical'} />
      <DetailLoginInput value={password} onChangeText={(value) => setPassword(value)} />

      <Separator size={10} position={'vertical'} />

      <UserCard title={"Nama"} value={name} />
      <Separator size={2} position={'vertical'} />
      <DetailLoginInput value={name} onChangeText={(value) => setName(value)} />

      <Separator size={10} position={'vertical'} />

      <UserCard title={"Umur"} value={age} />
      <Separator size={2} position={'vertical'} />
      <DetailLoginInput value={age.toString()} onChangeText={(value) => setAge(parseInt(value))} />

      <Separator size={10} position={'vertical'} />

      <UserCard title={"Hobi"} value={hobby} />
      <Separator size={2} position={'vertical'} />
      <DetailLoginInput value={hobby} onChangeText={(value) => setHobby(value)} />

      <TouchableOpacity style={{width: 200, height: 50, backgroundColor: 'beige', marginTop: 50}}  />
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
  },
  stylingTextInput: {
    backgroundColor: 'beige', borderWidth: 2, width: 300, paddingHorizontal: 10, paddingVertical: 5
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50
  }
});
