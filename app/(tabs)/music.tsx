import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedText>Music</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({});