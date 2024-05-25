import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import Spacer from "../Spacers";

const NarratorTabs = () => {
  return (
    <View style={styles.container}>
      <View>
        <ThemedText type="subtitle" style={styles.tabContainer}>
          MALE VOICE
        </ThemedText>
        <View style={styles.tabIndicator}></View>
      </View>
      <Spacer multiply={6} />
      <View>
        <ThemedText type="subtitle" style={styles.tabContainer}>
          FEMALE VOICE
        </ThemedText>
        <View style={styles.tabIndicator}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  tabContainer: {
    paddingBottom: 5,
  },
  tabIndicator: {
    borderBottomWidth: 2,
    width: "50%",
    alignSelf: "center",
  },
});

export default NarratorTabs;
