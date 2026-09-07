import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

export interface NavigationItemData {
  key: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: "/" | "/invest" | "/learn" | "/help";
}

interface NavigationItemProps {
  item: NavigationItemData;
  isActive: boolean;
  onPress: () => void;
}

export default function NavigationItem({
  item,
  isActive,
  onPress,
}: NavigationItemProps) {
  const color = isActive ? colors.textPrimary : colors.textTertiary;

  return (
    <Pressable style={styles.container} onPress={onPress} hitSlop={4}>
      <Ionicons name={item.icon} size={24} color={color} />
      <Text style={[styles.label, { color }]}>{item.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
  },
});
