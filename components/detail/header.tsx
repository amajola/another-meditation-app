import React from "react";
import { View, StyleSheet } from "react-native";
import { APP_PADDING } from "../ThemedView";
import { ThemedButtonCircle } from "../Button";
import PlayButton from "@/assets/images/play";
import { ThemedText } from "../ThemedText";
import CloseIcon from "@/assets/images/close";
import CatergoryMyIcon from "@/assets/images/category-icons/my";
import DownloadIcon from "@/assets/images/download";
import { CARD_PADDING, FONT_BOLD_COLOR } from "@/constants/styles";

interface DetailsHeaderInterface {
  onClose: () => void;
}

const DetailsHeader = ({onClose}: DetailsHeaderInterface) => {
  return (
    <View>
      <View style={styles.header}>
        <ThemedButtonCircle color="white" size={50} onPress={onClose}>
          <CloseIcon color={FONT_BOLD_COLOR} />
        </ThemedButtonCircle>

        <View style={styles.headerButtons}>
          <ThemedButtonCircle color={FONT_BOLD_COLOR} size={50}>
            <CatergoryMyIcon color="white" size={18} />
          </ThemedButtonCircle>
          <ThemedButtonCircle color={FONT_BOLD_COLOR} size={50}>
            <DownloadIcon color="white" size={18} />
          </ThemedButtonCircle>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    gap: CARD_PADDING,
    alignItems: "flex-start",
    height: "100%",
    justifyContent: "space-between",

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: APP_PADDING,
  },
  headerButtons: {
    display: "flex",
    flexDirection: "row",
    gap: CARD_PADDING,
  },
});

export default DetailsHeader;
