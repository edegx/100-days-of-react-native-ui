import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { TransactionItemData } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

interface TransactionRowProps {
  item: TransactionItemData;
  isLast?: boolean;
  showAmount: boolean;
}

const formatAmount = (value: number) => {
  return value.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const TransactionRow: React.FC<TransactionRowProps> = ({
  item,
  isLast,
  showAmount,
}) => {
  const isCredit = item.direction === "credit";
  return <View style={[styles.row, !isLast && styles.divider]}></View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarRing: {
    backgroundColor: "#0F3D33",
  },
  ringInner: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: colors.green,
  },
  avatarKuda: {
    backgroundColor: colors.purpleDark,
  },
  details: {
    flex: 1,
  },
  name: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: "500",
  },
  date: {
    ...typography.caption,
    color: colors.textTertiary,
    marginTop: 2,
  },
  amount: {
    ...typography.label,
    fontWeight: "600",
  },
  amountCredit: {
    color: colors.green,
  },
  amountDebit: {
    color: colors.textPrimary,
    textDecorationLine: "line-through",
    textDecorationColor: colors.textTertiary,
  },
});

export default TransactionRow;
