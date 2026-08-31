import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";

interface ScreenHeaderProps {
  title: string;
  rightActions?: React.ReactNode;
}

export default function ScreenHeader({
  title,
  rightActions,
}: ScreenHeaderProps) {
  return (
    <View>
      <View style={styles.topRow}>
        <IconButton name="ellipsis" onPress={() => {}} />
        <View style={styles.rightActions}>{rightActions}</View>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  title: {
    ...typography.largeTitle,
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
});
