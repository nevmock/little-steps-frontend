import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { Box, Text } from "utils/theme";
import { colors } from "utils/theme/colors";

type InputProps = {
  label: string;
  error?: undefined;
} & TextInputProps;

const Input = ({ label }: InputProps) => {
  return (
    <Box flexDirection="column">
      <Text mb="5" variant="textXs">
        {label}
      </Text>
      <TextInput style={{ borderBottomWidth: 1, borderColor: colors.primary }} />
    </Box>
  );
};

export default Input;
