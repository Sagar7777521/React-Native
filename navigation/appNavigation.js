import { View, Text } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcomescreen from "../App";
import Homescreen from "../screens/homeScreen";
import Loginscreen from "../screens/loginscreen";
import Signupscreen from "../screens/signupscreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return <NavigationContainer>
    <Stack.Navigator initalRouteName ="Welcome">
      <Stack.Screen name="Home"  options={{headerShown:false}} component={Homescreen} />
      <Stack.Screen name="Welcome" options={{headerShown:false}} component={Welcomescreen} />
      <Stack.Screen name="Login"  options={{headerShown:false}} component={Loginscreen} />
      <Stack.Screen name="Signup" options={{headerShown:false}} component={Signupscreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
