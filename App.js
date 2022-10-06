import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import DetailsScreen from './DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home Page" component={Home} options={{
            title: 'Home',
            headerStyle: {
            backgroundColor: '#5504c7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            }}/>
            
        <Drawer.Screen name="Login" component={Login}


        // options={{ drawerItemStyle: { display: 'none' }, }}
        />
                <Drawer.Screen name="Signup" component={Signup} />
                <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}


//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
 // },
//});