import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/Welcome";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} options={{
      headerShown:false, presentation:"modal"
    }} />
    <Stack.Screen name="Register" options={{
      headerShown:false
    }} component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
