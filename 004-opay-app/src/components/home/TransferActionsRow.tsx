import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { transferActions } from "@/data/transferActions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TransferActionsRow() {
  return (
    <View style={styles.card}>
      {transferActions.map((action) => (
        <Pressable key={action.id} style={styles.item}>
          <View style={styles.iconWrapper}>
            <MaterialCommunityIcons
              name={action.iconName as any}
              size={22}
              color={colors.primary}
            />
          </View>
          <Text style={styles.label}>{action.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    backgroundColor: colors.cardDark,
    borderRadius: radius.lg,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: spacing.lg,
  },
  item: {
    alignItems: "center",
    gap: spacing.sm,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.iconCircleDark,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: colors.textPrimary,
    fontSize: 13,
  },
});
