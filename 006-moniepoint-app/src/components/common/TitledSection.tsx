import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TitledSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function TitledSection({ title, children }: TitledSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: spacing.lg,
  },
});
