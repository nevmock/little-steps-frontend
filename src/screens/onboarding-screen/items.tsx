import { StyleSheet, View, useWindowDimensions, Image, Animated } from "react-native";
import { Text } from "../../utils/theme";
import React, { useRef } from "react";

import { Slide, slides } from "./slides";
import { colors } from "utils/theme/colors";
import Paginator from "./paginator";
import useOnboardingStore from "store/useOnboardingStroe";

interface ItemsProps {
  item: Slide;
}

const OnboardingItems: React.FC<ItemsProps> = ({ item }) => {
  const { width } = useWindowDimensions();
  const scrollX = useOnboardingStore((state) => state.scrollX);

  const titleWords = item.title.split(" ");
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, { width, resizeMode: "contain" }]} />

      <View style={{ flex: 0.5, marginHorizontal: 20 }}>
        <Text variant="text2Xl" style={styles.title}>
          {titleWords.map((word, index) => {
            if (index >= item.highlightIndexStart && index <= item.highlightIndexEnd) {
              return (
                <Text variant="textBold" key={index} style={styles.highlighted}>
                  {word}{" "}
                </Text>
              );
            }
            return `${word} `;
          })}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // margin: 38,
    flex: 0.4,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    color: "#000000",
    textAlign: "left",
  },
  highlighted: {
    fontWeight: "800",
    color: colors.primary,
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#605B57",
    textAlign: "left",
  },
});
