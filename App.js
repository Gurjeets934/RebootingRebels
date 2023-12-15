// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {NavigationContainer } from '@react-navigation/native';
// import AboutUs from './src/components/AboutUs';
// import Flexbox from './src/components/Flexbox';
// import HomePage from './src/components/HomePage';
// import Login from './src/components/Login';
// import Sign from './src/components/Sign';

import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import AboutUs from './src/components/AboutUs';


export default function App() {
  return (
    <NavigationContainer>
    
    <HomePage/>
     
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#3949AB', 

  },
});


// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'HomePage') {
//               iconName = focused ? 'ios-home' : 'ios-home-outline';
//             } else if (route.name === 'AboutUs') {
//               iconName = focused ? 'ios-person' : 'ios-person-outline';
//             } else if (route.name === 'Flexbox') {
//               iconName = focused ? 'ios-list' : 'ios-list-outline';
//             } else if (route.name === 'Login') {
//               iconName = focused ? 'ios-settings' : 'ios-settings-outline';
//             } else if (route.name === 'Sign') {
//               iconName = focused ? 'ios-analytics' : 'ios-analytics-outline';
//             }

//             return <Icon name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'blue',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="HomePage" component={HomePage} />
//         <Tab.Screen name="AboutUs" component={AboutUs} />
//         <Tab.Screen name="Flexbox" component={Flexbox} />
//         <Tab.Screen name="Login" component={Login} />
//         <Tab.Screen name="Sign" component={Sign} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;