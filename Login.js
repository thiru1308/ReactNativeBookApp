import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png" };

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.btncon}>
            <TouchableOpacity style={styles.btnu}  onPress={()=>alert("valid login")}>
                <Text style={styles.btntxt}>Login</Text>
            </TouchableOpacity>
        </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
welcome:{
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: "#fff",
      fontFamily: "DancingScript-Bold",
  },
  input:{
      width:"90%",
      backgroundColor: "#fff",
      padding: 15,
      marginBottom: 30,
  },
  btnu:{
      backgroundColor: "#c1bfd6",
      padding: 15,
      width: "45%",
  },
  btncon:{
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
  },
  btntxt:{
      fontSize: 14,
      textAlign: "center",
  }
});