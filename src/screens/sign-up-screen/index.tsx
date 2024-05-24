import { useNavigation } from "@react-navigation/native";
import Button from "components/Button";
import Input from "components/shared/input";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "navigation/types";
import React from "react";
import { Pressable, View } from "react-native";
import { Box, Text } from "utils/theme";
import { AntDesign } from "@expo/vector-icons";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} px="8" justifyContent="center">
        <Text variant="textXl" fontWeight={800}>
          Daftarkan Diri,
        </Text>
        <Text variant="textBase" color="grayText" mb="5">
          Daftarkan akunmu sekarang!
        </Text>
        <Input label="Nama" />
        <Box mb="5" />
        <Input label="Email" />
        <Box mb="5" />
        <Input label="Kata Sandi" secureTextEntry={true} />
        <Box mb="5" />
        <Input label="Konfirmasi Kata Sandi" secureTextEntry={true} />
        <Box height={57} />
        <Button label="Daftar" onPress={navigateToSignIn} />
        <Box height={57} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text
              style={{
                width: 150,
                textAlign: "center",
                fontSize: 11,
                fontFamily: "Poppins_400Regular",
              }}
            >
              atau daftar dengan
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
        <Box height={38} />
        <Pressable>
          <Box
            bg="white"
            style={{
              shadowColor: "#605B57",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 8,
            }}
            py="4"
            borderRadius="rounded-4xl"
          >
            <Box flexDirection="row" alignItems="center" justifyContent="center">
              <AntDesign name="google" size={24} color="black" />
              <Text ml="3" variant="textSm" textAlign="center" color="gray800">
                Google
              </Text>
            </Box>
          </Box>
        </Pressable>
        <Box flexDirection="row" alignItems="center" justifyContent="center" mt="8">
          <Text variant="textSm" textAlign="center">
            Sudah memiliki akun?{" "}
          </Text>
          <Pressable onPress={navigateToSignIn}>
            <Text
              fontSize={14}
              fontFamily="Poppins_800ExtraBold"
              color="primary"
              textAlign="center"
            >
              Masuk
            </Text>
          </Pressable>
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
