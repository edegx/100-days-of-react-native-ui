import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { QuickActionData } from "@/data/quickActions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface QuickActionItemProps {
  action: QuickActionData;
}

export default function QuickActionItem({ action }: QuickActionItemProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconWrapper}>
        {action.badgeText ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{action.badgeText}</Text>
          </View>
        ) : null}
        <MaterialCommunityIcons
          name={action.iconName as any}
          size={24}
          color={colors.white}
        />
      </View>
      <Text style={styles.label}>{action.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "25%",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.iconCircleDark,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -30,
    backgroundColor: colors.badgeRed,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radius.sm,
    zIndex: 1,
  },
  badgeText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: "700",
  },
  label: {
    color: colors.textPrimary,
    fontSize: 12.5,
    textAlign: "center",
  },
});
