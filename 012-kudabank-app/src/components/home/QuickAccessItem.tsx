import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { GridActionItem } from "@/types";
import React from "react";
import { StyleSheet } from "react-native";

interface QuickAccessItemProps {
  item: GridActionItem;
}

const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ item }) => {
  const { Icon, label, route } = item;
  return <></>;
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
