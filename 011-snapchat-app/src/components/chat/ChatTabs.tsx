import Badge from "@/components/common/Badge";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";

interface TabConfig {
  id: string;
  label: string;
  badgeCount?: string;
  avatarUri?: string;
}

const TABS: TabConfig[] = [
  { id: "unread", label: "Unread", badgeCount: "7" },
  {
    id: "my-ai",
    label: "My AI",
    avatarUri: "https://placehold.co/60x60/2ea8a8/ffffff.png?text=AI",
  },
  { id: "near-me", label: "Near me" },
  { id: "stories", label: "Stories", badgeCount: "9+" },
  { id: "calls", label: "Calls" },
  { id: "groups", label: "Groups" },
];

export default function ChatTabs() {
  const [selected, setSelected] = React.useState("unread");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {TABS.map((tab) => {
        const isSelected = tab.id === selected;
        return (
          <Pressable
            key={tab.id}
            style={styles.tab}
            onPress={() => setSelected(tab.id)}
          >
            {tab.avatarUri ? (
              <Image source={{ uri: tab.avatarUri }} style={styles.avatar} />
            ) : null}
            <Text
              style={[
                typography.tabLabel,
                {
                  color: isSelected ? colors.textPrimary : colors.textSecondary,
                },
              ]}
            >
              {tab.label}
            </Text>
            {tab.badgeCount ? (
              <Badge label={tab.badgeCount} style={styles.badge} />
            ) : null}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.md,
    marginTop: spacing.md,
    gap: spacing.lg,
    alignItems: "center",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  badge: {
    position: "relative",
    top: 0,
    right: 0,
  },
});
