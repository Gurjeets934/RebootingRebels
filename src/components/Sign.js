
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React  from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Login from "./Login";

const Stack = createNativeStackNavigator();

const SignMain = ({navigation}) => {
    return(
        <View style={styles.wrapper}>
        <View style={styles.topBox}>
            <Text>Congratulations! you are now registered</Text>
          
            <Text>Click Sign Up button to proceed!</Text>
            
        </View>
        <View style={styles.bottomBox}>
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{
            navigation.push('Login');
        }}><Text>Sign Up Here</Text></TouchableOpacity>
        </View>
        </View>
        )}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    topBox:{
        flex:3,
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    bottomBox:{
        flexBasis:70, 
        justifyContent:'flex-end',
        padding:10
    },
    buttonStyle:{
        backgroundColor: 'skyblue',
        color: '#000',
        padding: 10,
        alignItems: 'center',
        marginBottom: 2
    }
})

const Sign =() =>{
    return (
        <Stack.Navigator initialRouteName="Sign Main">
            <Stack.Screen name="Sign Main" component={SignMain} options={{
                title:"Create an Account"
            }}></Stack.Screen>
                 <Stack.Screen name="Login" component={Login} options={{
                headerShown:false, 
            }}></Stack.Screen>
        </Stack.Navigator>
    )    
}

export default Sign;