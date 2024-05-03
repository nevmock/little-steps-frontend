import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "navigation/types";
import React from "react";
import { Button } from "react-native";
import { Box, Text } from "utils/theme";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>Sign in Screen</Text>
      <Button title="Sign up" onPress={navigateToSignUp} />
    </Box>
  );
};

export default SignInScreen;
