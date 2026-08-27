import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { QuickAction } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppIcon from "../common/AppIcon";

interface QuickActionItemProps {
  item: QuickAction;
  onPress?: () => void;
}

export default function QuickActionItem({
  item,
  onPress,
}: QuickActionItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.tile, pressed && styles.pressed]}
    >
      {item.badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
      )}
      <AppIcon icon={item.icon} size={30} color={colors.purple} />
      <Text style={styles.label} numberOfLines={1}>
        {item.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "500",
  },
  badge: {
    position: "absolute",
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.orange,
    borderRadius: radius.sm,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: "700",
  },
});
