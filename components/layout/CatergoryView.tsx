import { CARD_PADDING } from "@/constants/styles";
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CatergoryFocusIcon from "@/assets/images/category-icons/focus";
import CatergoryMyIcon from "@/assets/images/category-icons/my";
import CatergoryResetIcon from "@/assets/images/category-icons/reset";
import CatergorySadIcon from "@/assets/images/category-icons/sad";
import CatergoryWorkIcon from "@/assets/images/category-icons/work";
import { ThemedButtonCatergory } from "@/components/Button";
import { ThemedText } from "../ThemedText";

const CatergoryView = () => {
  const [active, setActive] = React.useState(0);
  const buttonConfigurations = [
    { icon: CatergoryMyIcon, name: "My" },
    { icon: CatergoryFocusIcon, name: "Focus" },
    { icon: CatergoryResetIcon, name: "Rest" },
    { icon: CatergorySadIcon, name: "Anxious" },
    { icon: CatergoryWorkIcon, name: "Work" },
  ];

  return (
    <ScrollView horizontal>
      <View style={styles.catergoryContainer}>
        {buttonConfigurations.map((config, index) => (
          <View key={config.name}>
            <ThemedButtonCatergory
              renderIcon={(color: string) => <config.icon color={color} />}
              active={index === active}
              onPress={() => setActive(index)}
            />
            <ThemedText center>{config.name}</ThemedText>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  catergoryContainer: {
    display: "flex",
    flexDirection: "row",
    gap: CARD_PADDING,
  },
});

export default CatergoryView;
