import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { rewards } from "@/data/rewards";
import type { RewardData } from "@/types";
import { StyleSheet, Text, View } from "react-native";
import RewardCard from "./RewardCard";

interface RewardsSectionProps {
  isAmountVisible?: boolean;
  onRewardPress?: (reward: RewardData) => void;
}

export default function RewardsSection({
  isAmountVisible = true,
  onRewardPress,
}: RewardsSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Rewards</Text>
      <View style={styles.row}>
        {rewards.map((reward, index) => (
          <View
            key={reward.id}
            style={[styles.item, index === 0 ? styles.leftItem : null]}
          >
            <RewardCard
              reward={reward}
              isAmountVisible={isAmountVisible}
              onPress={onRewardPress}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
  },
  leftItem: {
    marginRight: spacing.md,
  },
});
