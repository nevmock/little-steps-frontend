import { View, Text } from "react-native";
import React, { useEffect } from "react";
import AuthStackNavigator from "./auth-stack-navigator";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator from "./app-stack-navigator";
import useUserGlobalStore from "store/useUserGlobalStore";

const Navigation = () => {
  const { user, updateUser } = useUserGlobalStore();

  console.log(`user`, JSON.stringify(user, null, 2));

  // useEffect(() => {
  //   updateUser({
  //     email: "aa@gmail.com",
  //     name: "aa"
  //   });

  //   return () => {};
  // }, []);
  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
