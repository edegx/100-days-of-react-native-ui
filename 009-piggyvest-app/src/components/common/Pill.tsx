import { radius, spacing } from "@/constants/spacing";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

interface PillProps {
  label: string;
  backgroundColor: string;
  textColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function Pill({
  label,
  backgroundColor,
  textColor = "#0D0D12",
  onPress,
  style,
}: PillProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.pill, { backgroundColor }, style]}
      hitSlop={6}
    >
      <Text style={[styles.label, { color: textColor }]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
  },
});
