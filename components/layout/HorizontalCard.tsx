import React from "react";
import { View, StyleSheet, ScrollView, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";
import { CARD_PADDING, CardRadius } from "@/constants/styles";
import type { CardInterface } from "@/types/layout";
import Spacer from "../Spacers";
import { AudioDataInterface } from "@/assets/data";

interface HorizontalCardInterface {
  cards: Array<AudioDataInterface>;
}

interface MiniCardInterface {
  title: string;
  subtext: string;
  index?: number;
  style?: ViewStyle;
  mini?: boolean;
}

export const MiniCard = ({
  index,
  title,
  subtext,
  style,
  mini,
}: MiniCardInterface) => {
  return (
    <View key={index} style={style}>
      <View style={mini ? styles.miniCard : styles.horizontalCard}></View>
      <Spacer />
      <View>
        <ThemedText type="mediumBold">{title}</ThemedText>
        <ThemedText uppercase>
          {`${subtext.slice(0, 20)} ${subtext.length < 20 ? "" : "..."}`}
        </ThemedText>
      </View>
    </View>
  );
};

const HorizontalCards = ({ cards }: HorizontalCardInterface) => {
  return (
    <ScrollView horizontal>
      <View style={styles.horizontalCardContainer}>
        {cards.map(({ title, subtext }, index) => {
          return (
            <MiniCard
              title={title}
              subtext={subtext}
              index={index}
              key={title}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  horizontalCardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: CARD_PADDING,
  },
  horizontalCard: {
    width: 160,
    height: 120,
    backgroundColor: "blue",
    borderRadius: CardRadius,
  },
  miniCard: {
    width: "100%",
    height: 120,
    backgroundColor: "blue",
    borderRadius: CardRadius,
  },
});

export default HorizontalCards;
