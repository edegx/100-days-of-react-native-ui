import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SearchCategory } from '@/types';
import { radius, spacing } from '@/constants/spacing';

interface CategoryCardProps {
  category: SearchCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Pressable style={[styles.card, { backgroundColor: category.backgroundColor }]}>
      <Text style={styles.emoji}>{category.emoji}</Text>
      <Text style={[styles.title, { color: category.textColor }]}>{category.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
  },
  emoji: {
    fontSize: 18,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
});
