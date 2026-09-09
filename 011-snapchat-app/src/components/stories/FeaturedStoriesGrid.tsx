import React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { spacing } from '@/constants/spacing';
import { featuredStories } from '@/data/stories';
import FeaturedStoryCard from './FeaturedStoryCard';

export default function FeaturedStoriesGrid() {
  const { width } = useWindowDimensions();
  const cardWidth = (width - spacing.base * 2 - spacing.md) / 2;

  return (
    <View style={styles.grid}>
      {featuredStories.map((item) => (
        <FeaturedStoryCard key={item.id} item={item} width={cardWidth} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.base,
    gap: spacing.md,
    marginTop: spacing.xl,
  },
});
