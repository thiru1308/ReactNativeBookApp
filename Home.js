import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png" };


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.h1}>Welcome to Book App</Text>

      
      <StatusBar style="auto" />
      </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
  h1:{
      color: '#ffff',
      fontWeight: 'bold',
      fontSize: 60,
      textAlign: 'center',
    }
});
