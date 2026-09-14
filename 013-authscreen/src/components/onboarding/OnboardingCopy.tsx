import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { StyleSheet, Text, View } from "react-native";

interface OnboardingCopyProps {
  title: string;
  subtitle: string;
}

export default function OnboardingCopy({
  title,
  subtitle,
}: OnboardingCopyProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: colors.textHeading,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.textMuted,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: spacing.md,
  },
});
