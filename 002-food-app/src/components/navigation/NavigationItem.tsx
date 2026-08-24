import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

import { colors } from "@/constants/colors";
import { NavItem } from "@/types";

const iconMap: Record<NavItem["icon"], keyof typeof Feather.glyphMap> = {
  home: "home",
  cart: "shopping-cart",
  orders: "file-text",
  account: "user",
};

interface NavigationItemProps {
  item: NavItem;
  isActive: boolean;
  onPress: () => void;
}

export default function NavigationItem({
  item,
  isActive,
  onPress,
}: NavigationItemProps) {
  const color = isActive ? colors.black : colors.lightGray;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Feather name={iconMap[item.icon]} size={22} color={color} />
      <Text style={[styles.label, { color }]}>{item.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: "500",
  },
});
