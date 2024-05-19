import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  ViewToken,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";

import { slides } from "./slides";
import OnboardingItems from "./items";
import Paginator from "./paginator";
import useOnboardingStore from "store/useOnboardingStroe";
import NextButton from "./NextButton";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "navigation/types";

type OnboardingNavigationTypeProps = NativeStackNavigationProp<AuthStackParamList, "SplashScreen">;

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const setScrollX = useOnboardingStore((state) => state.setScrollX);
  const scrollX = useOnboardingStore((state) => state.scrollX);
  const slidesRef = useRef<any>(null);
  const navigation = useNavigation<OnboardingNavigationTypeProps>();

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: useOnboardingStore.getState().scrollX } } }],
    { useNativeDriver: false },
  );

  const handleSkipPress = () => {
    slidesRef.current.scrollToEnd();
  };

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const navigateLogin = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={["#FAFAFA", "#F6E5EB", "#F5E1E8", "#F4DCE4", "#F5E1E8", "#F6E5EB", "#FAFAFA"]}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <FlatList
              data={slides}
              renderItem={({ item }) => <OnboardingItems item={item} />}
              horizontal
              pagingEnabled
              bounces={false}
              keyExtractor={(item) => item.id}
              onScroll={onScroll}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slidesRef}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.paginator}>
            <Paginator data={slides} scrollX={scrollX} />
            <View style={styles.nextButton}>
              <NextButton
                scrollTo={scrollTo}
                percentage={(currentIndex + 1) * (100 / slides.length)}
              />
              {currentIndex < 2 && (
                <TouchableOpacity onPress={handleSkipPress}>
                  <Text style={styles.skip}>Lewati</Text>
                </TouchableOpacity>
              )}
              {currentIndex === 2 && (
                <TouchableOpacity onPress={navigateLogin}>
                  <Text style={styles.skip}>Login</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paginator: {
    position: "absolute",
    bottom: 133,
    left: -283,
    right: 0,
    alignItems: "center",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  skip: {
    fontSize: 16,
  },
});
