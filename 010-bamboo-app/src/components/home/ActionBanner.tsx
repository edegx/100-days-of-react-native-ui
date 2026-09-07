import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { StyleSheet, Text, View } from "react-native";

export default function ActionBanner() {
  return (
    <View style={styles.card}>
      <View style={styles.textColumn}>
        <Text style={styles.title}>Ready to take an action?</Text>
        <Text style={styles.subtitle}>
          Deposit any amount today, your goals start here
        </Text>
      </View>
      <View style={styles.coinsStack}>
        <View style={[styles.coin, styles.coinTall]} />
        <View style={[styles.coin, styles.coinShort]} />
        <View style={[styles.coin, styles.coinMedium]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.purpleBanner,
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  textColumn: {
    flex: 1,
    paddingRight: spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 15,
    color: "#C9C7E0",
    lineHeight: 20,
  },
  coinsStack: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
    width: 90,
    height: 90,
  },
  coin: {
    width: 26,
    borderRadius: 13,
    backgroundColor: "#E0C070",
  },
  coinTall: {
    height: 90,
  },
  coinShort: {
    height: 55,
  },
  coinMedium: {
    height: 75,
  },
});
