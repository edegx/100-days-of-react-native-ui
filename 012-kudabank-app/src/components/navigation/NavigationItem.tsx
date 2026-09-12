import { IconProps } from "@/components/icons/Icons";
import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface NavigationItemProps {
  label: string;
  Icon: React.ComponentType<IconProps>;
  active?: boolean;
  onPress?: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  Icon,
  active,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <View style={[styles.pill, active && styles.pillActive]}>
        <Icon size={23} color={colors.textPrimary} />
        <Text style={[styles.label, active && styles.labelActive]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  pill: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: spacing.sm,
    paddingVertical: 8,
    borderRadius: radii.pill,
    minWidth: 64,
  },
  pillActive: {
    backgroundColor: colors.navActiveBackground,
  },
  label: {
    ...typography.caption,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  labelActive: {
    color: colors.textPrimary,
  },
});

export default NavigationItem;
