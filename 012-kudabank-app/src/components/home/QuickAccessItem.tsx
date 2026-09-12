import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { GridActionItem } from "@/types";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface QuickAccessItemProps {
  item: GridActionItem;
}

const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ item }) => {
  const { Icon, label, route } = item;
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() => route && router.push(route as any)}
    >
      <Icon size={24} color={colors.textPrimary} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colors.surface,
    borderRadius: radii.sm,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  pressed: {
    opacity: 0.75,
  },
  label: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: "500",
  },
});

export default QuickAccessItem;
