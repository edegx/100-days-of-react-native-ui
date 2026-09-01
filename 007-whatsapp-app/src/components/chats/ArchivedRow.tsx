import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

interface ArchivedRowProps {
  count: number;
}

export default function ArchivedRow({ count }: ArchivedRowProps) {
  return (
    <Pressable style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <Ionicons name="archive-outline" size={22} color={colors.textSecondary} />
      <Text style={styles.label}>Archived</Text>
      <Text style={styles.count}>{count}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  pressed: {
    backgroundColor: colors.overlayLight,
  },
  label: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginLeft: spacing.lg,
    flex: 1,
  },
  count: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
