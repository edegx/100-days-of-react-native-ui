import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationItem from "./NavigationItem";

type NavKey = "home" | "search" | "favorites" | "profile";

const NAV_ITEMS: { key: NavKey; icon: keyof typeof Octicons.glyphMap }[] = [
  { key: "home", icon: "home" },
  { key: "search", icon: "search" },
  { key: "favorites", icon: "heart" },
  { key: "profile", icon: "person" },
];

export default function BottomNavigation() {
  const [active, setActive] = useState<NavKey>("home");

  return (
    <View style={styles.container}>
      {NAV_ITEMS.map((item) => (
        <NavigationItem
          key={item.key}
          icon={item.icon}
          isActive={active === item.key}
          onPress={() => setActive(item.key)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
});
