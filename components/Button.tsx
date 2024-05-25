import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";
import PlayButton from "@/assets/images/play";
import { FONT_BOLD_COLOR, TabBarActiveTintColor } from "@/constants/styles";

interface ThemedButtonInterface {
  title: string;
  style?: ViewStyle;
  onClick: () => void;
}

interface ThemedButtonCircleInterface {
  children: React.ReactNode; // Accept any valid React component as a child
  color?: string;
  size?: number;
  onPress?: () => void
}

interface ThemedButtonCatergoryInterface {
  active?: boolean;
  renderIcon: (color: string) => React.ReactNode;
  onPress: () => void;
}

const ThemedButton = ({ title, style, onClick }: ThemedButtonInterface) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onClick}>
      <ThemedText type="button">{title}</ThemedText>
    </TouchableOpacity>
  );
};

export const ThemedButtonCircle = ({
  children,
  color,
  size = 40,
  onPress
}: ThemedButtonCircleInterface) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonCircle,
        {
          backgroundColor: color ?? FONT_BOLD_COLOR,
          height: size,
          width: size,
        },
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export const ThemedButtonCatergory = ({
  active,
  renderIcon,
  onPress,
}: ThemedButtonCatergoryInterface) => {
  const isActive = active
    ? styles.buttonCatergoryActive
    : styles.buttonCatergoryInactive;
  return (
    <TouchableOpacity
      style={[styles.buttonCatergory, isActive]}
      onPress={onPress}
    >
      {renderIcon("white")}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  buttonCircle: {
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCatergoryInactive: {
    backgroundColor: "#A0A3B1",
  },
  buttonCatergoryActive: {
    backgroundColor: TabBarActiveTintColor,
  },
  buttonCatergory: {
    width: 64,
    height: 64,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ThemedButton;
