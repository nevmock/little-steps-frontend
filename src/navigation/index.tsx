import { View, Text } from "react-native";
import React from "react";
import AuthStackNavigator from "./auth-stack-navigator";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
