import { View, Text } from "react-native";
import React from "react";
import AuthStackNavigator from "./auth-stack-navigator";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator from "./app-stack-navigator";

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
