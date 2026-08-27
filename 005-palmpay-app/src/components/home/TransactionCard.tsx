import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Transaction } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TransactionCardProps {
  transaction: Transaction;
  onPress?: () => void;
}

export default function TransactionCard({
  transaction,
  onPress,
}: TransactionCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {transaction.title.length > 27
            ? transaction.title.slice(0, 27) + "..."
            : transaction.title}
        </Text>
        <View style={styles.subRow}>
          <Text style={styles.amount}>₦ {transaction.amount}</Text>
          <Text style={styles.dot}> </Text>
          <Text style={styles.status}>{transaction.status}</Text>
        </View>
      </View>
      <Text style={styles.date}>{transaction.date}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  amount: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  dot: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  status: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  date: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});
