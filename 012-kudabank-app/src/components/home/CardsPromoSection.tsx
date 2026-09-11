import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import React from "react";
import { StyleSheet, View } from "react-native";

const CardsPromoSection: React.FC = () => {
  return <View style={styles.container}></View>;
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
    flexDirection: "row",
    backgroundColor: colors.pinkCard,
    borderRadius: radii.sm,
    padding: spacing.lg,
    gap: spacing.lg,
    alignItems: "center",
  },
  textWrap: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    ...typography.cardTitle,
    fontSize: 19,
    color: colors.black,
  },
  cardBody: {
    ...typography.body,
    color: colors.pinkCardText,
    lineHeight: 20,
  },
  cta: {
    ...typography.label,
    color: colors.pinkCardText,
    fontWeight: "700",
    fontSize: 14,
    marginTop: 4,
  },
});

export default CardsPromoSection;
