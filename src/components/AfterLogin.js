import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import WelcomePage from './WelcomePage';
import Flexbox from './Flexbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import HomePage from "./HomePage";
// import { FontAwesome } from '@expo/vector-icons'; 
// import { AntDesign } from '@expo/vector-icons'; 
// import { StyleSheet, Text } from "react-native";
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()

const AfterLogin = () =>{
return (<Tabs.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Welcome') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';

        } 

        if (route.name === 'Gallery') {
          iconName = focused
            ? 'planet-outline'
            : 'planet';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >   
  <Tabs.Screen name="Welcome" component={WelcomePage} options={{headersShown: false}} />
  <Tabs.Screen name="Gallery" component={Flexbox} />
  </Tabs.Navigator>
  );
}
    

export default AfterLogin;