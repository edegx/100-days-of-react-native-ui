import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { navItems } from "@/data/navItems";
import NavigationItem from "./NavigationItem";

export default function BottomNavigation() {
  const [activeId, setActiveId] = useState("home");
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: Math.max(insets.bottom, spacing.sm),
        },
      ]}
    >
      {navItems.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          onPress={() => setActiveId(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: colors.cardDark,

    // Outer pill
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "#3A3A3A",

    marginHorizontal: spacing.md,

    // Gives the nav the height seen in screenshot 2
    height: 80,

    paddingHorizontal: 6,
  },
});
