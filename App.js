import 'react-native-gesture-handler';
import React from 'react';
import { Text, TouchableOpacity, Button, StyleSheet, View, Image } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import io from "socket.io-client";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home/Home';
import SignIn from './src/Home/SignIn';
import SignUp from './src/Home/SignUp';
import MyEvents from './src/Events/MyEvents';
import CreateEvents from './src/Events/CreateEvents';
const LOCATION_TASK_NAME = 'background-location-task';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MyEvents" component={MyEvents} />
        <Stack.Screen name="CreateEvent" component={CreateEvents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// export default class Component extends React.Component {
//   componentDidMount() {
//     this.socket = io("http://192.168.0.45:5000");
//     // this.socket.on("chat message", msg => {
//     //   this.setState({
//     //     chatMessages: [...this.state.chatMessages, msg]
//     //   });
//     // });
//   }
//   onPress = async () => {
//     console.log(status)
//     const { status } = await Location.requestPermissionsAsync();
//     if (status === 'granted') {
//       let location = await Location.getCurrentPositionAsync({});
//       console.log(location)
//       this.socket.emit('marker', [location.coords.latitude, location.coords.longitude]);

//       await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
//         accuracy: Location.Accuracy.Balanced,
//       });
//     }
//   };

//   render() {
//     return (
//       <NavigationContainer>
//         <View style={styles.container}>
//           <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
//           <Text style={styles.instructions}>
//             To share a photo from your phone with a friend, just press the button below!
//       </Text>

//           <TouchableOpacity
//             onPress={this.onPress}
//             style={{ backgroundColor: 'blue' }}>
//             <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
//           </TouchableOpacity>
//         </View>
//       </NavigationContainer>
//     );
//   }
// }

// TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
//   if (error) {
//     // Error occurred - check `error.message` for more details.
//     return;
//   }
//   if (data) {
//     const { locations } = data;
//     // do something with the locations captured in the background
//   }
// });


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 305,
//     height: 159,
//     marginBottom: 20,
//   },
//   instructions: {
//     color: '#888',
//     fontSize: 18,
//     marginHorizontal: 15,
//     marginBottom: 10,
//   },
// });