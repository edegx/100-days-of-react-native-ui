import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { transactions } from "@/data/transactions";
import type { TransactionData } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import TransactionItem from "./TransactionItem";

interface TransactionsSectionProps {
  isAmountVisible?: boolean;
  onViewAllPress?: () => void;
  onTransactionMorePress?: (transaction: TransactionData) => void;
}

export default function TransactionsSection({
  isAmountVisible = true,
  onViewAllPress,
  onTransactionMorePress,
}: TransactionsSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <Pressable onPress={onViewAllPress}>
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
      </View>
      <View style={styles.card}>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            isLast={index === transactions.length - 1}
            isAmountVisible={isAmountVisible}
            onMorePress={onTransactionMorePress}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: "700",
  },
  viewAll: {
    color: colors.accentYellow,
    fontSize: 15,
    fontWeight: "700",
  },
  card: {
    backgroundColor: colors.serviceTile,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
  },
});
