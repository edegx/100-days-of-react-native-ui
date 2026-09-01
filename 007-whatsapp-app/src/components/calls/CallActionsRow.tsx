import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../common/IconButton";

const actions: { name: string; label: string; font?: string }[] = [
  { name: "phone", label: "Call" },
  { name: "calendar", label: "Schedule" },

  { name: "apps-outline", label: "Keypad", font: "Ionicons" },
  { name: "heart", label: "Favourites" },
];

export default function CallActionsRow() {
  return (
    <View style={styles.row}>
      {actions.map((action) => (
        <View key={action.label} style={styles.item}>
          <IconButton
            name={action.name}
            font={action.font}
            onPress={() => {}}
          />
          <Text style={styles.label}>{action.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
  item: {
    alignItems: "center",
    gap: spacing.sm,
  },
  label: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
