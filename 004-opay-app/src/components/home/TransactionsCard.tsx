import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Transaction } from "@/types";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface TransactionsCardProps {
  transactions: Transaction[];
}

function TransactionRow({ transaction }: { transaction: Transaction }) {
  return (
    <View style={styles.row}>
      <View style={styles.iconCircle}>
        {transaction.isCredit ? (
          <Ionicons name="arrow-down" size={18} color={colors.primary} />
        ) : (
          <MaterialCommunityIcons
            name="file-document-outline"
            size={18}
            color={colors.primary}
          />
        )}
      </View>

      <View style={styles.middle}>
        <Text style={styles.title} numberOfLines={1}>
          {transaction.title}
        </Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>

      <View style={styles.right}>
        <Text
          style={[styles.amount, transaction.isCredit && styles.amountCredit]}
        >
          {transaction.isCredit ? "+" : "-"}
          {transaction.amount}
        </Text>
        <View style={styles.statusPill}>
          <Text style={styles.statusText}>{transaction.status}</Text>
        </View>
      </View>
    </View>
  );
}

export default function TransactionsCard({
  transactions,
}: TransactionsCardProps) {
  return (
    <View style={styles.card}>
      {transactions.map((transaction) => (
        <TransactionRow key={transaction.id} transaction={transaction} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    backgroundColor: colors.cardDark,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  middle: {
    flex: 1,
    marginRight: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "400",
  },
  date: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  right: {
    alignItems: "flex-end",
  },
  amount: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  amountCredit: {
    color: colors.primary,
  },
  statusPill: {
    backgroundColor: colors.successBg,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    marginTop: spacing.xs,
  },
  statusText: {
    color: colors.successText,
    fontSize: 11,
    fontWeight: "500",
  },
});
