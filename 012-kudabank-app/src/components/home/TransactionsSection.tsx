import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import React from "react";
import { StyleSheet, View } from "react-native";

interface TransactionsSectionProps {
  showAmounts: boolean;
}

const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  showAmounts,
}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.sm,
    paddingHorizontal: spacing.lg,
  },
});

export default TransactionsSection;
