import { colors } from "@/constants/colors";
import { Octicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

interface NavigationItemProps {
  icon: keyof typeof Octicons.glyphMap;
  isActive: boolean;
  onPress: () => void;
}

export default function NavigationItem({
  icon,
  isActive,
  onPress,
}: NavigationItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.container} hitSlop={10}>
      {isActive ? (
        <View style={styles.activeCircle}>
          <Octicons name={icon} size={20} color={colors.text} />
        </View>
      ) : (
        <Octicons name={icon} size={22} color={colors.iconInactive} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
