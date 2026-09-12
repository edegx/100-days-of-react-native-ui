import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { productsData } from "@/data/productsData";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductRow from "./ProductRow";

const ProductsSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <View style={styles.card}>
        {productsData.map((item, index) => (
          <ProductRow
            key={item.id}
            item={item}
            isLast={index === productsData.length - 1}
          />
        ))}
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
});

export default ProductsSection;
