import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { SavingsPlan } from "@/types";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import SavingsPlanCard from "./SavingsPlanCard";

interface SavingsPlansGridProps {
  title: string;
  plans: SavingsPlan[];
}

export default function SavingsPlansGrid({
  title,
  plans,
}: SavingsPlansGridProps) {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.grid}>
        {plans.map((plan) => (
          <SavingsPlanCard
            key={plan.id}
            plan={plan}
            compact={true}
            onPress={() => router.push("/savings")}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: spacing.md,
  },
});
