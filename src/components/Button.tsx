import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "utils/theme";

export type Props = {
  name: string;
  width: number;
};

const Button: React.FC<Props> = ({ name, width }) => {
  return (
    <Box bg="primary" p="4" borderRadius="rounded-4xl" width={width}>
      <Text style={styles.text}>{name}</Text>
    </Box>
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
