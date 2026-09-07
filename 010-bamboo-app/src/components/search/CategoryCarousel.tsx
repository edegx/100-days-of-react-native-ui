import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { searchCategories } from '@/data/categories';
import { spacing } from '@/constants/spacing';
import CategoryCard from './CategoryCard';

export default function CategoryCarousel() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {searchCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    paddingVertical: spacing.xl,
  },
});
