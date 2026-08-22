import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import WalletSelector from "./WalletSelector";

interface BalanceCardProps {
  totalBalance: string;
  changeAmount: string;
  changePercent: string;
  walletName: string;
  walletAddress: string;
}

export default function BalanceCard({
  totalBalance,
  changeAmount,
  changePercent,
  walletName,
  walletAddress,
}: BalanceCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Balance</Text>
      <View style={styles.balanceRow}>
        <Text style={styles.balance}>{totalBalance}</Text>
        <WalletSelector
          walletName="Main Wallet"
          walletAddress={walletAddress}
        />
      </View>
      <View style={styles.changeRow}>
        <View style={styles.changeIconWrap}>
          <Ionicons name="caret-up" size={10} color={colors.white} />
        </View>
        <Text style={styles.changeText}>
          {changeAmount}
          <Text style={styles.changePercent}>({changePercent})</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    marginTop: spacing.xxl,
  },
  label: {
    fontSize: 15,
    color: colors.mediumGray,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.xs,
  },
  balance: {
    fontSize: 38,
    fontWeight: "700",
    color: colors.black,
  },
  changeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.sm,
    gap: 6,
  },
  changeIconWrap: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  changeText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.green,
  },
  changePercent: {
    fontWeight: "400",
    color: colors.green,
  },
});
