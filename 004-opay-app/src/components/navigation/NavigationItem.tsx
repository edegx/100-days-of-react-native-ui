import { Pressable, StyleSheet, Text } from "react-native";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { NavItemData } from "@/data/navItems";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface NavigationItemProps {
  item: NavItemData;
  isActive: boolean;
  onPress: () => void;
}

export default function NavigationItem({
  item,
  isActive,
  onPress,
}: NavigationItemProps) {
  const color = isActive ? colors.primary : colors.textPrimary;
  const iconColor = isActive ? colors.primary : colors.textSecondary;
  return (
    <Pressable
      style={[styles.container, isActive && styles.containerActive]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={item.iconName as any}
        size={22}
        color={iconColor}
      />
      <Text style={[styles.label, { color }]}>{item.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    paddingVertical: spacing.sm,
  },
  containerActive: {
    backgroundColor: colors.cardDarker,
    borderRadius: 999,
    marginHorizontal: 2,
  },
  label: {
    fontSize: 11,
    fontWeight: "500",
  },
});
