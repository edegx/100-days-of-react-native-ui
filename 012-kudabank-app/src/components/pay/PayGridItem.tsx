import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { GridActionItem } from "@/types";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PayGridItemProps {
  item: GridActionItem;
}

const PayGridItem: React.FC<PayGridItemProps> = ({ item }) => {
  const { Icon, label, badge } = item;
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
      <Icon size={24} color={colors.textPrimary} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "22.5%",
    aspectRatio: 1,
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: radii.sm,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  pressed: {
    opacity: 0.75,
  },
  badge: {
    position: "absolute",
    top: -9,
    right: 0,
    backgroundColor: colors.hotBadge,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "700",
    color: colors.hotBadgeText,
  },
  label: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
  },
});

export default PayGridItem;
