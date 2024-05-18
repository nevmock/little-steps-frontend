import { FlatList, StyleSheet, Text, View, Animated, ViewToken } from "react-native";
import React, { useState, useRef } from "react";

import { slides } from "./slides";
import OnboardingItems from "./items";
import Paginator from "./paginator";
import useOnboardingStore from "store/useOnboardingStroe";

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const setScrollX = useOnboardingStore((state) => state.setScrollX);
  const slidesRef = useRef(null);

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

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
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

      {/* <Paginator data={slides} scrollX={scrollX} /> */}
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
