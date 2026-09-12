import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { transactionsData } from "@/data/transactionsData";
import React from "react";
import { StyleSheet, View } from "react-native";
import SectionHeader from "../common/SectionHeader";
import TransactionRow from "./TransactionRow";

interface TransactionsSectionProps {
  showAmounts: boolean;
}

const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  showAmounts,
}) => {
  return (
    <View style={styles.container}>
      <SectionHeader title="Transactions" actionLabel="View All" />
      <View style={styles.card}>
        {transactionsData.map((item, index) => (
          <TransactionRow
            key={item.id}
            item={item}
            isLast={index === transactionsData.length - 1}
            showAmount={showAmounts}
          />
        ))}
      </View>
    </View>
  );
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
