import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BankIcon, CopyIcon } from "../icons/Icons";

interface AccountCardProps {
  currencyLabel: string;
  accountNumber: string;
  balance: number;
  lastUpdatedLabel: string;
  visible: boolean;
  onToggleVisible: () => void;
}

const formatBalance = (value: number) => {
  const [whole, fraction] = value.toFixed(2).split(".");
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return { whole: withCommas, fraction };
};

const AccountCard: React.FC<AccountCardProps> = ({
  currencyLabel,
  accountNumber,
  balance,
  lastUpdatedLabel,
  visible,
  onToggleVisible,
}) => {
  const { whole, fraction } = formatBalance(balance);

  return (
    <View style={styles.container}>
      <View style={styles.accountRow}>
        <BankIcon size={16} color={colors.textSecondary} />
        <Text style={styles.accountText}>
          {currencyLabel} · {accountNumber}
        </Text>
        <CopyIcon size={16} color={colors.purple} />
      </View>

      <Pressable onPress={onToggleVisible} hitSlop={10}>
        <View style={styles.balanceRow}>
          {visible ? (
            <Text style={styles.balanceText}>
              ₦{whole}
              <Text style={styles.balanceFraction}>.{fraction}</Text>
            </Text>
          ) : (
            <View style={styles.maskedRow}>
              <Text style={styles.balanceText}>₦</Text>
              {[0, 1, 2, 3, 4].map((i) => (
                <View key={i} style={styles.maskPill} />
              ))}
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  accountText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  balanceText: {
    ...typography.balance,
  },
  balanceFraction: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  maskedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  maskPill: {
    width: 14,
    height: 14,
    borderRadius: 4,
    backgroundColor: colors.textPrimary,
  },
  dotsButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  updatedText: {
    ...typography.caption,
    color: colors.textTertiary,
    marginTop: spacing.sm,
  },
});

export default AccountCard;
