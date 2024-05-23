import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text } from "utils/theme";

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  uppercase?: boolean;
  width?: number;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  onLongPress,
  disabled,
  width,
  uppercase,
}) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <Box bg={disabled ? "gray800" : "primary"} py="4" borderRadius="rounded-4xl" width={width}>
        <Text
          variant="textSm"
          textAlign="center"
          color="white"
          textTransform={uppercase ? "uppercase" : "none"}
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});
