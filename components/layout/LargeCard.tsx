import { CARD_PADDING, CardColor, CardRadius } from "@/constants/styles";
import type { CardInterface } from "@/types/layout";
import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedButton from "../Button";
import Spacer from "../Spacers";
import { ThemedText } from "../ThemedText";

const LargeCard = ({ title, buttonTitle, style, subText, duration, keyindex = "d", onClick }: CardInterface) => {
  return (
    <View style={[styles.largeCard, style]} key={keyindex}>
      <View style={{ display: "flex", justifyContent: "flex-end" }}>
        <ThemedText type="mediumBold">{title}</ThemedText>
        <ThemedText uppercase style={styles.subText}>{subText}</ThemedText>
      </View>
      <View>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </View>
      <View style={styles.largeCardBottonContainer}>
        <ThemedText style={styles.subText}>{duration} MIN</ThemedText>
        <ThemedButton title={buttonTitle} onClick={onClick}/>
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
    width: "48%",
    height: 230,
  },
  largeCardBottonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subText: {
    textTransform: "uppercase",
    color: "white",
  },
});

export default LargeCard;
