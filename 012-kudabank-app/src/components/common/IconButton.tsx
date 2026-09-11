import { colors } from "@/constants/colors";
import { radii } from "@/constants/spacing";
import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

interface IconButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  badgeLabel?: string;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  onPress,
  badgeLabel,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
    >
      {children}
      {badgeLabel ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeLabel}</Text>
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: radii.md,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  badge: {
    position: "absolute",
    top: -9,
    right: -9,
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: radii.sm,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: colors.textInverse,
    fontSize: 9,
    fontWeight: "700",
  },
});

export default IconButton;
