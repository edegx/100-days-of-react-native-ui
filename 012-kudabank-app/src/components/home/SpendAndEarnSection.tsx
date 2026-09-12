import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { spendAndEarnData } from "@/data/spendAndEarnData";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChevronRightIcon } from "../icons/Icons";

const SpendAndEarnSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spend And Earn</Text>
      <View style={styles.card}>
        {spendAndEarnData.map((item, index) => {
          const { Icon } = item;
          const isLast = index === spendAndEarnData.length - 1;
          return (
            <View key={item.id} style={[styles.row, !isLast && styles.divider]}>
              <View style={styles.iconWrap}>
                <Icon size={20} color={colors.textPrimary} />
              </View>
              <View style={styles.textWrap}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowSubtitle}>{item.subtitle}</Text>
              </View>
              <ChevronRightIcon size={20} color={colors.textTertiary} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.sm,
    paddingHorizontal: spacing.lg,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.lg,
    gap: spacing.md,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: radii.sm,
    backgroundColor: colors.surfaceAlt,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrap: {
    flex: 1,
  },
  rowTitle: {
    ...typography.cardTitle,
    color: colors.textPrimary,
  },
  rowSubtitle: {
    ...typography.body,
    color: colors.textTertiary,
    marginTop: 2,
  },
});

export default SpendAndEarnSection;
