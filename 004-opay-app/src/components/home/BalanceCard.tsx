import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface BalanceCardProps {
  accountBalance: string;
  balanceVisible: boolean;
  onToggleVisibility: () => void;
  onPressHistory?: () => void;
  onPressAddMoney?: () => void;
}

export default function BalanceCard({
  accountBalance,
  balanceVisible,
  onToggleVisibility,
  onPressHistory,
  onPressAddMoney,
}: BalanceCardProps) {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.topRow}>
          <View style={styles.labelRow}>
            <MaterialCommunityIcons
              name="shield-check"
              size={16}
              color={colors.black}
            />
            <Text style={styles.label}>Available Balance</Text>
            <Pressable onPress={onToggleVisibility} hitSlop={10}>
              <Ionicons
                name={balanceVisible ? "eye-outline" : "eye-off-outline"}
                size={18}
                color={colors.black}
              />
            </Pressable>
          </View>

          <Pressable
            onPress={onPressHistory}
            style={styles.historyRow}
            hitSlop={8}
          >
            <Text style={styles.historyText}>Transaction History</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.black} />
          </Pressable>
        </View>

        <View style={styles.bottomRow}>
          <Pressable style={styles.amountRow} hitSlop={8}>
            {balanceVisible ? (
              <Text style={styles.amount}>
                <Text style={styles.strike}>₦</Text>
                {accountBalance}
              </Text>
            ) : (
              <Text style={styles.amount}>****</Text>
            )}
            <Ionicons name="chevron-forward" size={18} color={colors.black} />
          </Pressable>

          <Pressable style={styles.addMoneyButton} onPress={onPressAddMoney}>
            <Text style={styles.addMoneyText}>+ Add Money</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.primary,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.black,
  },
  historyRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  historyText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.black,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  amount: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.black,
    letterSpacing: 1,
  },
  strike: {
    textDecorationLine: "line-through",
  },
  addMoneyButton: {
    backgroundColor: colors.black,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.round,
  },
  addMoneyText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },
});
