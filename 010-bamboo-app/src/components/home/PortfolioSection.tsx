import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SectionHeader from "../common/SectionHeader";

export default function PortfolioSection() {
  return (
    <View style={styles.container}>
      <SectionHeader title="Portfolio" actionLabel="+ New Investment" />
      <Pressable style={styles.emptyCard}>
        <View style={styles.iconBox}>
          <Ionicons name="briefcase" size={20} color={colors.textPrimary} />
        </View>

        <View style={styles.textColumn}>
          <Text style={styles.title}>No assets have been added yet</Text>
          <Text style={styles.subtitle}>
            Tap here to add assets to your portfolio
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xxl,
  },
  emptyCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.greenBright,
    alignItems: "center",
    justifyContent: "center",
  },
  textColumn: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 19,
  },
});
