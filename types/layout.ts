import type { ViewStyle } from "react-native";

export interface CardInterface {
  title: string;
  buttonTitle: string;
  subText: string;
  style?: ViewStyle;
  duration?: string;
  keyindex?: string;
  onClick: () => void
}
