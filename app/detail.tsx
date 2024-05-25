import { StyleSheet, View, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { CARD_PADDING } from "@/constants/styles";
import { useNavigation } from "expo-router";
import CatergoryMyIcon from "@/assets/images/category-icons/my";
import Spacer from "@/components/Spacers";
import { ThemedText } from "@/components/ThemedText";
import NarratorItem from "@/components/detail/narratorItem";
import DetailsHeader from "@/components/detail/header";
import NarratorTabs from "@/components/detail/narratorTab";

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.headerContainer}>
      <DetailsHeader onClose={() => navigation.goBack()} />
      <ThemedView>
        <Spacer multiply={1} />
        <ThemedText type="title">Happy Morning</ThemedText>
        <ThemedText type="subtitle">COURSE</ThemedText>
        <Spacer />
        <ThemedText>
          Ease the mind into a restful night’s sleep with these deep, amblent
          tones.
        </ThemedText>
        <Spacer multiply={3} />
        <View style={styles.socialContainer}>
          <View style={styles.socialItem}>
            <CatergoryMyIcon size={20} color="pink" fill="pink" />
            <ThemedText style={styles.socialText}>24.234 Favorits</ThemedText>
          </View>
          <Spacer multiply={3} />
          <View style={styles.socialItem}>
            <CatergoryMyIcon size={20} color="pink" fill="pink" />
            <ThemedText style={styles.socialText}>24.234 Favorits</ThemedText>
          </View>
        </View>
        <Spacer multiply={3} />
        <ThemedText type="mediumBold">Pick a Nnrrator</ThemedText>
        <Spacer multiply={2} />
        <NarratorTabs />
        <Spacer />
        <ScrollView>
          <NarratorItem />
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: "40%",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
  },
  socialItem: {
    display: "flex",
    flexDirection: "row",
    gap: CARD_PADDING,
    alignItems: "center",
  },
  socialText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
export default DetailScreen;
