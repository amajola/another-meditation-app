import { CARD_PADDING, CardColor, CardRadius } from "@/constants/styles";
import type { CardInterface } from "@/types/layout";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

type LargeCardTextInterface = Omit<CardInterface, "subText" | "buttonTitle"> & {
  size?: "large" | "medium";
};

const LargeCardText = ({ title, style, size }: LargeCardTextInterface) => {
  return (
    <View
      style={[size === "large" ? styles.largeCard : styles.mediumCard, style]}
    >
      <View style={{ display: "flex", justifyContent: "flex-end" }}>
        <ThemedText type="subtitle" style={styles.title}>
          {title}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  largeCard: {
    borderRadius: CardRadius,
    backgroundColor: CardColor,
    padding: CARD_PADDING,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "95%",
    height: 230,
    marginBottom: CARD_PADDING - 5,
  },
  mediumCard: {
    borderRadius: CardRadius,
    backgroundColor: CardColor,
    padding: CARD_PADDING,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "95%",
    height: 190,
    marginBottom: CARD_PADDING - 5,
  },
  title: {
    color: "white",
  },
});

export default LargeCardText;
