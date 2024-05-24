import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { Box, Text } from "utils/theme";
import { colors } from "utils/theme/colors";

type InputProps = {
  label: string;
  error?: undefined;
  secureTextEntry?: boolean;
} & TextInputProps;

const Input = ({ label, secureTextEntry }: InputProps) => {
  return (
    <Box flexDirection="column">
      <Text mb="5" variant="textXs">
        {label}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={{
          borderBottomWidth: 1,
          borderColor: colors.primary,
          paddingBottom: 10,
          fontFamily: "Poppins_600SemiBold",
          fontSize: 17,
        }}
      />
    </Box>
  );
};

export default Input;
