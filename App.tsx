import { ThemeProvider } from "@shopify/restyle";
import Button from "components/Button";
import { StatusBar } from "expo-status-bar";
import Navigation from "navigation";
import { StyleSheet, Text, View } from "react-native";
import theme from "utils/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
