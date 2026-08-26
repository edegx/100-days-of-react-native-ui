import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";

interface PromoBannerProps {
  eyebrow?: string;
  icon: ReactNode;
  title: string;
  description: string;
  bgColor?: string;
  ctaLabel?: string;
}

export default function PromoBanner({
  eyebrow,
  icon,
  title,
  description,
  bgColor = "red",
  ctaLabel = "Go",
}: PromoBannerProps) {
  return (
    <View style={[{ backgroundColor: bgColor }, styles.container]}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <View style={styles.row}>
        <View style={styles.iconWrapper}>{icon}</View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>
        <Pressable style={styles.ctaButton}>
          <Text style={styles.ctaText}>{ctaLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    // backgroundColor: colors.primaryDark,
    borderRadius: radius.lg,
    padding: spacing.lg,
    overflow: "hidden",
  },
  eyebrow: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 12.5,
    lineHeight: 17,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    borderRadius: radius.round,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    marginLeft: spacing.sm,
  },
  ctaText: {
    color: colors.black,
    fontSize: 13,
    fontWeight: "700",
  },
});
