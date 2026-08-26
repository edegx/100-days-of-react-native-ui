import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ActionItem {
  key: "like" | "review" | "save";
  icon: keyof typeof FontAwesome5.glyphMap;
  label: string;
}

const ACTIONS: ActionItem[] = [
  { key: "like", icon: "thumbs-up", label: "Like" },
  { key: "review", icon: "comment", label: "Review" },
  { key: "save", icon: "bookmark", label: "Save" },
];

export default function ActionRow() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handlePress = (key: ActionItem["key"]) => {
    if (key === "like") setLiked((v) => !v);
    if (key === "save") setSaved((v) => !v);
  };

  return (
    <View style={styles.container}>
      {ACTIONS.map((action, index) => (
        <React.Fragment key={action.key}>
          <Pressable
            style={styles.item}
            onPress={() => handlePress(action.key)}
            hitSlop={6}
          >
            <FontAwesome5
              name={
                action.key === "like" && liked
                  ? "thumbs-up"
                  : action.key === "save" && saved
                    ? "bookmark"
                    : action.icon
              }
              size={18}
              color={
                (action.key === "like" && liked) ||
                (action.key === "save" && saved)
                  ? colors.primary
                  : colors.textSecondary
              }
            />
            <Text style={styles.label}>{action.label}</Text>
          </Pressable>
          {index < ACTIONS.length - 1 && <View style={styles.divider} />}
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "500",
  },
  divider: {
    width: StyleSheet.hairlineWidth,
    height: 20,
    backgroundColor: colors.border,
  },
});
