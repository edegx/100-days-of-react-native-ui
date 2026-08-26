import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { CategoryTab } from "@/types";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

interface CategoryTabsProps {
  tabs: CategoryTab[];
}

export default function CategoryTabs({ tabs }: CategoryTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {tabs.map((tabs) => {
        const isActive = tabs.id === activeId;
        return (
          <Pressable
            key={tabs.id}
            onPress={() => setActiveId(tabs.id)}
            hitSlop={6}
            style={styles.tab}
          >
            <Text
              style={isActive ? typography.tabActive : typography.tabInactive}
            >
              {tabs.label}{" "}
            </Text>
            {isActive && <View style={styles.underline}></View>}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    gap: spacing.xl,
    alignItems: "flex-start",
  },
  tab: {
    alignItems: "center",
    marginHorizontal: 5,
    paddingBottom: spacing.sm,
  },
  underline: {
    marginTop: 6,
    height: 3,
    width: 18,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
});
