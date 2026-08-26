import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { quickActions } from "@/data/quickActions";
import QuickActionItem from "./QuickActionItem";

export default function QuickActionsGrid() {
  return (
    <View style={styles.card}>
      {quickActions.map((action) => (
        <QuickActionItem key={action.id} action={action} />
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
    flexWrap: "wrap",
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.sm,
  },
});
