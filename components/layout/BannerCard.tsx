import { CARD_PADDING, CardColor, CardRadius } from "@/constants/styles";
import type { CardInterface } from "@/types/layout";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import ThemedButton from "../Button";
import Spacer from "../Spacers";

const BannerCard = ({ title, style, subText, buttonTitle }: CardInterface) => {
  return (
    <View style={[styles.largeCard, style]}>
      <ThemedText type="title" style={styles.centerText}>
        {title}
      </ThemedText>
      <ThemedText type="subtitle" style={[styles.centerText, {fontSize: 14, minHeight: 30}]}>
        {subText}
      </ThemedText>
      <Spacer/>
      <Spacer/>
      <ThemedButton title={buttonTitle} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  largeCard: {
    borderRadius: CardRadius,
    backgroundColor: CardColor,
    padding: CARD_PADDING,
    alignItems: "flex-start",
    width: "100%",
    height: 233,
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 10,
    width: 100,
    padding: CARD_PADDING - 2,
  },
  centerText: {
    color: 'white'
  },
});

export default BannerCard;
