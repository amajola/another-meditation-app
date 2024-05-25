import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CARD_PADDING } from "@/constants/styles";
import { ScrollView, StyleSheet, View } from "react-native";
import LargeCard from "@/components/layout/LargeCard";
import WideCard from "@/components/layout/WideCard";
import Spacer from "@/components/Spacers";
import HorizontalCards from "@/components/layout/HorizontalCard";
import BannerCard from "@/components/layout/BannerCard";
import { HomeScreenData } from "@/assets/data";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  const data = HomeScreenData;
  const navigation = useNavigation();
  return (
    <ThemedView>
      <ScrollView>
        <View style={[styles.logoContainer, styles.scrollViewChild]}>
          <ThemedText type="title" style={styles.logoText}>
            Slient
          </ThemedText>
          <View style={styles.logo} />
          <ThemedText type="title" style={styles.logoText}>
            Moon
          </ThemedText>
        </View>

        <View style={styles.scrollViewChild}>
          <ThemedText type="title">Good Morning, Afsar</ThemedText>
          <ThemedText type="subtitle">We Wish you have a good day</ThemedText>
        </View>

        <View style={styles.largeCardContainer}>
          {data.slice(0, 2).map((element) => (
            <LargeCard
              key={element.title}
              title={element.title}
              buttonTitle="Start"
              subText={element.subtext}
              duration={element.duration}
              onClick={() => {
                navigation.navigate("detail");
              }}
            />
          ))}
        </View>

        <View style={styles.scrollViewChild}>
          <WideCard
            title={data[3].title}
            subText={data[3].subtext}
            onClick={() => {}}
          />
        </View>

        <View style={styles.scrollViewChild}>
          <ThemedText type="mediumBold" style={styles.mediumBoldText}>
            Recomended for you
          </ThemedText>
          <Spacer />
          <Spacer />
          <HorizontalCards cards={data.slice(4, 10)} />
        </View>

        <BannerCard
          title={data[10].title}
          buttonTitle="Start"
          subText={data[10].subtext}
          onClick={() => {}}
        />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  // Usings scrollViewChild because gap is not working
  scrollViewChild: {
    paddingBottom: 30,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
  },
  logoText: {
    fontFamily: "Montserrat",
    letterSpacing: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "black",
  },
  largeCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: CARD_PADDING,
  },
  mediumBoldText: {
    fontSize: 24,
  },
});
