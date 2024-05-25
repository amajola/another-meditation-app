import React from "react";
import { View, StyleSheet } from "react-native";
import { APP_PADDING } from "../ThemedView";
import { ThemedButtonCircle } from "../Button";
import PlayButton from "@/assets/images/play";
import { ThemedText } from "../ThemedText";

const NarratorItem = () => {
  return (
    <View style={styles.narratorItem}>
      <ThemedButtonCircle>
        <PlayButton size={15} color="white" />
      </ThemedButtonCircle>
      <View>
        <ThemedText type="defaultSemiBold">FEMALE VOICE</ThemedText>
        <ThemedText>10 Min</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  narratorItem: {
    display: "flex",
    flexDirection: "row",
    gap: APP_PADDING * 2,
    paddingBottom: APP_PADDING * 2,
  },
});

export default NarratorItem;
