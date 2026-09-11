import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { ProductRowData } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

interface ProductRowProps {
  item: ProductRowData;
  isLast?: boolean;
}

const ProductRow: React.FC<ProductRowProps> = ({ item, isLast }) => {
  const { Icon } = item;
  return <View style={[styles.row, !isLast && styles.divider]}></View>;
};

const styles = StyleSheet.create({
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
  title: {
    ...typography.cardTitle,
    color: colors.textPrimary,
    flex: 1,
  },
  cta: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radii.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
  },
  ctaText: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: "600",
  },
});

export default ProductRow;
