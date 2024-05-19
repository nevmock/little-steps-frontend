import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { LinearGradient } from "expo-linear-gradient";
import { AuthStackParamList } from "navigation/types";
import { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "react-native";

type SplashScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SplashScreen">;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const logo = require("../../../assets/logo.png");

  useEffect(() => {
    // Simulate a delay for the splash screen
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FAFAFA", "#F6E5EB", "#F5E1E8", "#F4DCE4", "#F5E1E8", "#F6E5EB", "#FAFAFA"]}
        style={styles.background}
      >
        <Image source={logo} style={styles.logo} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
