
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React  from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import WelcomePage from "./WelcomePage";
import AfterLogin from "./AfterLogin";

const Stack = createNativeStackNavigator();

const LoginMain = ({navigation}) => {
    return(
        <View style={styles.wrapper}>
        <View style={styles.topBox}>
            <Text>Your Username is already with us!</Text>
          
            <Text>Click below button to proceed to main screen!</Text>
            
        </View>
        <View style={styles.bottomBox}>
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{
            navigation.reset({
                index:0,
                routes: [{ name: 'AfterLogin' }]
            });
            // navigation.push('AfterLogin');
        }}><Text>Login Here</Text></TouchableOpacity>
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
        backgroundColor: 'yellow',
        color: '#000',
        padding: 10,
        alignItems: 'center',
        marginBottom: 2
    }
})

const Login =() =>{
    return (
        <Stack.Navigator initialRouteName="Login Main">
            <Stack.Screen name="Login Main" component={LoginMain} options={{
                title:"Already a User"
            }}></Stack.Screen>
                 <Stack.Screen name="AfterLogin" component={AfterLogin} options={{
                headerShown:false, 
            }}></Stack.Screen>
        </Stack.Navigator>
    )    
}

export default Login;