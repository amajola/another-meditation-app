import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { FONT_BOLD_COLOR, FONT_LIGHT_COLOR } from "@/constants/styles";
export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  uppercase?: boolean;
  center?: boolean,
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "mediumBold"
    | "button"
    | "uppercase";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  uppercase,
  center,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        uppercase ? styles.upperbase : undefined,
        center ? styles.center : undefined,
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "mediumBold" ? styles.mediumBold : undefined,
        type === "button" ? styles.button : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

export const styles = StyleSheet.create({
  default: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "HelveticaNeueMedium",
    color: FONT_LIGHT_COLOR,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 50,
    fontFamily: "Helvetica Neue Bold",
    color: FONT_BOLD_COLOR,
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "light",
    fontFamily: "HelveticaNeueLight",
    color: FONT_LIGHT_COLOR,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  mediumBold: {
    fontFamily: "Helvetica Neue Bold",
    fontSize: 20,
    lineHeight: 30,
  },
  button: {
    fontFamily: "HelveticaNeueMedium",
    fontSize: 12,
    textTransform: "uppercase",
    textAlign: 'center'
  },
  upperbase: {
    textTransform: "uppercase",
  },
  center: {
    textAlign: 'center'
  }
});
