import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import type { TransactionData } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface TransactionItemProps {
  transaction: TransactionData;
  isLast?: boolean;
  isAmountVisible?: boolean;
  onMorePress?: (transaction: TransactionData) => void;
}

export default function TransactionItem({
  transaction,
  isLast,
  isAmountVisible = true,
  onMorePress,
}: TransactionItemProps) {
  return (
    <View style={[styles.row, !isLast && styles.divider]}>
      <View style={styles.iconCircle}>
        <Ionicons
          name={transaction.direction === "out" ? "arrow-up" : "arrow-down"}
          size={16}
          color={colors.accentYellow}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.amount}>
          {isAmountVisible ? transaction.amount : "••••"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.lg,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.serviceTile,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  details: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  date: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  amount: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
});
