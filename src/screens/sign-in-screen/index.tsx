import { useNavigation } from "@react-navigation/native";
import Input from "components/shared/input";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
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
    <SafeAreaWrapper>
      <Box>
        <Text>Sign in Screen</Text>
        <Button title="Sign up" onPress={navigateToSignUp} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;
