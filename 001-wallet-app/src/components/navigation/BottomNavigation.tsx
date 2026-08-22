import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NavigationItem from "@/components/navigation/NavigationItem";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { navItems } from "@/data/navItems";

export default function BottomNavigation() {
  const [activeId, setActiveId] = useState(navItems[0].id);

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.container}>
        {navItems.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={item.id === activeId}
            onPress={() => setActiveId(item.id)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: spacing.md,
    paddingBottom: spacing.xs,
    paddingHorizontal: spacing.lg,
  },
});
