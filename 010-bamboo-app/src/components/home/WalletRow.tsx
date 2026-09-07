import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { WalletItem } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface WalletRowProps {
  wallet: WalletItem;
  isLast?: boolean;
}

export default function WalletRow({ wallet, isLast }: WalletRowProps) {
  return (
    <Pressable style={[styles.row, !isLast && styles.divider]}>
      <View
        style={[
          styles.iconBox,
          { backgroundColor: wallet.iconBackgroundColor },
        ]}
      >
        <Ionicons name="wallet" size={18} color={colors.background} />
        <Text style={styles.flag}>{wallet.flagEmoji}</Text>
      </View>
      <Text style={styles.name}>{wallet.name}</Text>
      <Text style={styles.balance}>{wallet.balance}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  flag: {
    position: "absolute",
    bottom: -2,
    right: -2,
    fontSize: 14,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  balance: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});
