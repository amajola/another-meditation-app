import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CatergoryView from "@/components/layout/CatergoryView";
import { AudioDataInterface, MeditateScreenData } from "@/assets/data";
import LargeCardText from "@/components/layout/LargeCardText";
import WideCard from "@/components/layout/WideCard";
import MasonryList from "@react-native-seoul/masonry-list";
import { CARD_PADDING } from "@/constants/styles";

export default function MeditateScreen() {
  const data = MeditateScreenData;
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

        <View style={styles.scrollViewChild}>
          <WideCard
            title={data[0].title}
            subText={data[0].duration}
            onClick={() => {}}
          />
        </View>

        <MasonryList
          style={styles.cardContainer}
          data={data.slice(1, data.length)}
          numColumns={2}
          renderItem={(props: { item: AudioDataInterface; i: number }) => {
            const { item, i } = props;
            return (
              <LargeCardText
                size={i % 2 === 1 ? "medium" : "large"}
                title={item.title}
                style={item.type === "nature" ? styles.smallerCard : undefined}
                onClick={() => {}}
              />
            );
          }}
        />
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
  smallerCard: {
    height: 60,
  },
  cardContainer: {
    rowGap: CARD_PADDING,
  },
});
