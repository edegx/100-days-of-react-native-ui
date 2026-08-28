import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import type { RewardData } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface RewardCardProps {
  reward: RewardData;
  isAmountVisible?: boolean;
  onPress?: (reward: RewardData) => void;
}

export default function RewardCard({
  reward,
  isAmountVisible = true,
  onPress,
}: RewardCardProps) {
  return (
    <Pressable style={styles.card} onPress={() => onPress?.(reward)}>
      <View style={[styles.iconTile, { backgroundColor: reward.tileColor }]}>
        <Text style={styles.emoji}>{reward.emoji}</Text>
      </View>
      <Text style={styles.label}>{reward.label}</Text>
      <Text style={styles.amount}>
        {isAmountVisible ? reward.amount : "••••"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.serviceTile,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  iconTile: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  emoji: {
    fontSize: 18,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: spacing.sm,
  },
  amount: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "700",
  },
});
