import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen"; //path to files
import LoginScreen from "./app/assets/screens/LoginScreen"; //path to files
import HomeScreen from "./app/assets/screens/HomeScreen"; //path to files
import RegisterScreen from "./app/assets/screens/RegisterScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} // Masquer l'en-tête pour WelcomeScreen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Masquer l'en-tête pour LoginScreen
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} // Masquer l'en-tête pour LoginScreen
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
