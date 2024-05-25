import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CatergoryView from "@/components/layout/CatergoryView";
import { SleepScreenData } from "@/assets/data";
import BannerCard from "@/components/layout/BannerCard";
import HorizontalCards, { MiniCard } from "@/components/layout/HorizontalCard";

export default function SleepScrren() {
  const data = SleepScreenData;
  return (
    <ThemedView>
      <ScrollView>
        <View style={styles.scrollViewChild}>
          <ThemedText type="title" center>
            Sleep Stories
          </ThemedText>
          <ThemedText type="subtitle" center>
            Soothing bedtime stories to help you fall into a deep and natural
            sleep
          </ThemedText>
        </View>

        <View style={styles.itemsPadding}>
          <CatergoryView />
        </View>

        <View style={styles.itemsPadding}>
          <BannerCard
            title={data[1].title}
            buttonTitle="Start"
            subText={data[1].subtext}
            onClick={() => {}}
          />
        </View>

        <View style={styles.miniCardContainer}>
          {data.slice(2, 21).map((element, index) => (
            <MiniCard
              index={index}
              title={element.title.slice(0, 14)}
              subtext={element.subtext}
              style={styles.miniCard}
              mini
            />
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  scrollViewChild: {
    paddingBottom: 30,
  },
  itemsPadding: {
    paddingBottom: 20,
  },
  miniCard: {
    width: "48%",
  },
  miniCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
