import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedButtonCircle } from "../Button";
import PlayButton from "@/assets/images/play";
import { CARD_PADDING, CardColor, CardRadius } from "@/constants/styles";
import type { CardInterface } from "@/types/layout";

type WildCardInterface = Omit<CardInterface, 'buttonTitle'>

const WideCard = ({title, subText, style}: WildCardInterface) => {
  return (
    <View style={[styles.wideCard, style]}>
      <View>
        <ThemedText type="mediumBold">{title}</ThemedText>
        <ThemedText uppercase style={styles.subText}>{subText}</ThemedText>
      </View>
      <ThemedButtonCircle>
        <PlayButton color={"black"} />
      </ThemedButtonCircle>
    </View>
  );
};

const styles = StyleSheet.create({
  wideCard: {
    width: "100%",
    height: 100,
    backgroundColor: CardColor,
    borderRadius: CardRadius,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: CARD_PADDING,
  },
  subText: {
    color: 'white'
  }
});

export default WideCard;
