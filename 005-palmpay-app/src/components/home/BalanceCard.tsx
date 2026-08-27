import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PillButton from "../common/PillButton";
import InterestBanner from "./InterestBanner";

interface BalanceCardProps {
  currencySymbol?: string;
  balance: string;
  onPressHistory?: () => void;
  onPressAddMoney?: () => void;
  onPressBalance?: () => void;
}

export default function BalanceCard({
  currencySymbol = "₦",
  balance,
  onPressHistory,
  onPressAddMoney,
  onPressBalance,
}: BalanceCardProps) {
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.verifiedRow}>
            <MaterialCommunityIcons
              name="shield-check"
              size={18}
              color={colors.green}
            />

            <Text style={styles.label}>Available Balance</Text>
            <Pressable onPress={() => setHidden((v) => !v)} hitSlop={8}>
              <Ionicons
                name={hidden ? "eye-off-outline" : "eye-outline"}
                size={18}
                color={"rgba(255,255,255,0.85)"}
              />
            </Pressable>
          </View>

          <Pressable
            onPress={onPressHistory}
            hitSlop={8}
            style={styles.historyRow}
          >
            <Text style={styles.historyText}>Transaction History</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.white} />
          </Pressable>
        </View>
        <View style={[styles.row, styles.bottomRow]}>
          <Pressable onPress={onPressBalance} style={styles.balanceRow}>
            <Text style={styles.balance}>
              {hidden ? `${currencySymbol}****` : `${currencySymbol}${balance}`}
            </Text>
          </Pressable>

          <PillButton label="Add Money" onPress={onPressAddMoney} />
        </View>
      </View>
      <InterestBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.lg,

    borderRadius: radius.lg,
    backgroundColor: colors.divider,
  },

  card: {
    backgroundColor: colors.purple,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
    borderColor: colors.purple,
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomRow: {
    alignItems: "flex-end",
  },
  verifiedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  verifiedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
  },
  historyRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  historyText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "500",
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  balance: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "700",
  },
});
