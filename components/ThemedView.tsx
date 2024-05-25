import { View, StyleSheet, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const APP_PADDING = 10;
export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <SafeAreaProvider style={[styles.safeAreaViewStyle, style]}>
      <SafeAreaView>
        <View style={[{ backgroundColor }, style]} {...otherProps} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    paddingHorizontal: APP_PADDING,
    backgroundColor: "white",
  },
});
