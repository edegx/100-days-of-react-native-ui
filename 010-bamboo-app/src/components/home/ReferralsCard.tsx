import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ReferralsCard() {
  return (
    <Pressable style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name="people" size={20} color={colors.textPrimary} />
      </View>

      <Text style={styles.label}>Referrals</Text>
      <Text style={styles.value}>$0.00</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
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
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    flex: 1,
    fontSize: 17,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  value: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});
