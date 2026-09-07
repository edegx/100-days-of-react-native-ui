import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import WalletActionButton from "./WalletActionButton";

const currencies = ["USD", "NGN"];

export default function WealthCard() {
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const currency = currencies[currencyIndex];
  const amount = currency === "USD" ? "$0" : "₦0";

  const toggleCurrency = () => {
    setCurrencyIndex((prev) => (prev + 1) % currencies.length);
  };

  return (
    <View style={styles.card}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Your total wealth</Text>
        <Pressable
          style={styles.currencyToggle}
          onPress={toggleCurrency}
          hitSlop={8}
        >
          <Text style={styles.currencyLabel}>in {currency}</Text>
          <Ionicons
            name="chevron-expand"
            size={14}
            color={colors.greenAccent}
          />
        </Pressable>
      </View>

      <View style={styles.amountRow}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.decimal}>.00</Text>
      </View>

      <View style={styles.buttonsRow}>
        <WalletActionButton label="Add money" icon="add" variant="primary" />
        <WalletActionButton
          label="Withdraw"
          icon="remove"
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 17,
    color: colors.textPrimary,
    fontWeight: "500",
  },
  currencyToggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  currencyLabel: {
    fontSize: 17,
    color: colors.greenAccent,
    fontWeight: "600",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: spacing.xl,
  },
  amount: {
    fontSize: 46,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  decimal: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: 4,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
});
