import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface BalanceCardProps {
  accountNumber: string;
  accountName: string;
  balance: string;
  lastUpdated: string;
  isBalanceVisible: boolean;
  onToggleVisibility: () => void;
  onCopyPress?: () => void;
  onAddMoneyPress?: () => void;
  onHistoryPress?: () => void;
}

export default function BalanceCard({
  accountNumber,
  accountName,
  balance,
  lastUpdated,
  isBalanceVisible,
  onToggleVisibility,
  onCopyPress,
  onAddMoneyPress,
  onHistoryPress,
}: BalanceCardProps) {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.accountRow}>
          <Text style={styles.accountText}>
            {accountNumber} <Text style={styles.separator}>|</Text>{" "}
            {accountName}
          </Text>
          <Pressable onPress={onCopyPress} hitSlop={8} style={styles.copyIcon}>
            <Ionicons
              name="copy-outline"
              size={16}
              color={colors.textSecondary}
            />
          </Pressable>
        </View>

        <View style={styles.balanceRow}>
          {isBalanceVisible ? (
            <Text style={styles.balance}>{balance}</Text>
          ) : (
            <Text style={styles.balance}>••••</Text>
          )}
          <Pressable
            onPress={onToggleVisibility}
            hitSlop={8}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={isBalanceVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={colors.textPrimary}
            />
          </Pressable>
        </View>

        <Text style={styles.lastUpdated}>{lastUpdated}</Text>

        <View style={styles.actionsRow}>
          <Pressable style={styles.actionButton} onPress={onAddMoneyPress}>
            <Ionicons name="add" size={16} color={colors.textPrimary} />
            <Text style={styles.actionText}>Add Money</Text>
          </Pressable>
          <Pressable style={styles.actionButton} onPress={onHistoryPress}>
            <Ionicons
              name="time-outline"
              size={16}
              color={colors.textPrimary}
            />
            <Text style={styles.actionText}>History</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: radius.xl,
    marginHorizontal: spacing.lg,
    padding: spacing.xl,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  separator: {
    color: colors.textMuted,
    fontWeight: "400",
  },
  copyIcon: {
    marginLeft: spacing.sm,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.lg,
  },
  balance: {
    color: colors.textPrimary,
    fontSize: 34,
    fontWeight: "800",
  },
  eyeIcon: {
    marginLeft: spacing.md,
  },
  lastUpdated: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
    marginTop: spacing.sm,
  },
  actionsRow: {
    flexDirection: "row",
    marginTop: spacing.lg,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cardBackgroundAlt,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
    marginRight: spacing.md,
  },
  actionText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    marginLeft: spacing.xs,
  },
});
