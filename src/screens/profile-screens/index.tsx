import { View, Text } from "react-native";
import React from "react";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { Box } from "utils/theme";

const ProfileScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Profile Screen</Text>
      </Box>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;
