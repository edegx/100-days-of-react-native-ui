import BalanceCard from "@/components/home/BalanceCard";
import InterestBanner from "@/components/home/InterestBanner";
import { View, StyleSheet } from "react-native";
import { spacing } from "@/constants/spacing";

export default function BalanceSection() {
  return (
    <View style={styles.container}>
      <BalanceCard balance="5,003,800.95" />
      <InterestBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm, // Small gap between cards, matching screenshot
  },
});