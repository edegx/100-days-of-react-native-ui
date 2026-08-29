import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Period = "week" | "month";

interface SpendingData {
  moneyIn: string;
  moneyOut: string;
}

const spendingByPeriod: Record<Period, SpendingData> = {
  week: { moneyIn: "₦759,000.00", moneyOut: "₦75,900.50" },
  month: { moneyIn: "₦3,112,450.00", moneyOut: "₦540,120.75" },
};

interface SpendingTrendsProps {
  isBalanceVisible: boolean;
}

export default function SpendingTrends({
  isBalanceVisible,
}: SpendingTrendsProps) {
  const [period, setPeriod] = useState<Period>("week");
  const data = spendingByPeriod[period];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Spending trends</Text>
      <View style={styles.card}>
        <View style={styles.toggleRow}>
          <Pressable
            style={[
              styles.toggleButton,
              period === "week" && styles.toggleButtonActive,
            ]}
            onPress={() => setPeriod("week")}
          >
            <Text
              style={[
                styles.toggleText,
                period === "week" && styles.toggleButtonActive,
              ]}
            >
              Week
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.toggleButton,
              period === "month" && styles.toggleButtonActive,
            ]}
            onPress={() => setPeriod("month")}
          >
            <Text
              style={[
                styles.toggleText,
                period === "month" && styles.toggleButtonActive,
              ]}
            >
              Month
            </Text>
          </Pressable>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <View style={styles.summaryLabelRow}>
              <View style={[styles.iconCircle, styles.inCircle]}>
                <Ionicons name="arrow-down" size={12} color={colors.green} />
              </View>
              <Text style={styles.moneyInLabel}>Money in</Text>
            </View>
            <Text style={styles.summaryAmount}>
              {isBalanceVisible ? data.moneyIn : "••••"}
            </Text>
          </View>

          <View style={[styles.summaryItem, styles.summaryItemRight]}>
            <View style={styles.summaryLabelRow}>
              <View style={[styles.iconCircle, styles.outCircle]}>
                <Ionicons name="arrow-up" size={12} color={colors.red} />
              </View>
              <Text style={styles.moneyOutLabel}>Money out</Text>
            </View>
            <Text style={styles.summaryAmount}>
              {isBalanceVisible ? data.moneyOut : "••••"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.serviceTile,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  toggleRow: {
    flexDirection: "row",
    marginBottom: spacing.xl,
  },
  toggleButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
    backgroundColor: colors.serviceTile,
    marginRight: spacing.md,
  },
  toggleButtonActive: {
    backgroundColor: colors.accentYellow,
  },
  toggleText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "700",
  },
  toggleTextActive: {
    color: "#1A1300",
  },
  summaryRow: {
    flexDirection: "row",
  },
  summaryItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.lg,
  },
  summaryItemRight: {
    marginLeft: spacing.md,
  },
  summaryLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  iconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  inCircle: {
    backgroundColor: "#123B2D",
  },
  outCircle: {
    backgroundColor: "#3B1F1A",
  },
  moneyInLabel: {
    color: colors.green,
    fontSize: 13,
    fontWeight: "700",
  },
  moneyOutLabel: {
    color: colors.red,
    fontSize: 13,
    fontWeight: "700",
  },
  summaryAmount: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
});
