import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "navigation/types";
import React from "react";
import { Button } from "react-native";
import { Box, Text } from "utils/theme";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <Box>
      <Text>Sign up Screen</Text>
      <Button title="Sign in" onPress={navigateToSignIn} />
    </Box>
  );
};

export default SignUpScreen;
