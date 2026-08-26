import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";

interface IconButtonProps {
  children: ReactNode;
  onPress?: () => void;
  badgeCount?: number;
  labelBadge?: string;
  size?: number;
}

export default function IconButton({
  children,
  onPress,
  badgeCount,
  labelBadge,
  size = 26,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={[styles.container, { width: size + 6, height: size + 6 }]}
    >
      {children}
      {labelBadge ? (
        <View style={styles.labelBadge}>
          <Text style={styles.labelBadgeText}>{labelBadge}</Text>
        </View>
      ) : null}
      {badgeCount ? (
        <View style={styles.countBadge}>
          <Text style={styles.countBadgeText}>{badgeCount}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  labelBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#ffdeec",

    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderRadius: 6,
  },
  labelBadgeText: {
    color: colors.badgeRed,
    fontSize: 5,
    fontWeight: "700",
  },
  countBadge: {
    position: "absolute",
    top: -4,
    right: -2,
    backgroundColor: colors.badgeRed,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  countBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "700",
  },
});
