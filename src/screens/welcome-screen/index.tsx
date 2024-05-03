import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "navigation/types";
import React from "react";
import { Button } from "react-native";
import { Box, Text } from "utils/theme";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>Welcome Screen</Text>
      <Button title="Sign in" onPress={navigateToSignIn} />
      <Button title="Sign up" onPress={navigateToSignUp} />
    </Box>
  );
};

export default WelcomeScreen;
