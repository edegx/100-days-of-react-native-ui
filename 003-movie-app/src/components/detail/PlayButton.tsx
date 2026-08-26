import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Pressable, StyleSheet, Text } from "react-native";

interface PlayButtonProps {
  label: string;
  onPress?: () => void;
}

export default function PlayButton({ label, onPress }: PlayButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    borderRadius: radius.md,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
  },
});
