import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "utils/theme";

export type Props = {
  name: string;
};

const Button: React.FC<Props> = ({ name }) => {
  return (
    <Box bg="primary" p="4" borderRadius="rounded-3xl">
      <Text>{name}</Text>
    </Box>
  );
};

export default Button;

const styles = StyleSheet.create({});
