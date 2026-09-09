import React from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { discoverStories } from '@/data/stories';
import DiscoverCard from './DiscoverCard';

export default function DiscoverGrid() {
  const { width } = useWindowDimensions();
  const cardWidth = (width - spacing.base * 2 - spacing.md) / 2;

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={typography.sectionHeader}>Discover</Text>
        <Ionicons name="chevron-forward" size={18} color={colors.textPrimary} />
      </View>

      <View style={styles.grid}>
        {discoverStories.map((item) => (
          <DiscoverCard key={item.id} item={item} width={cardWidth} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.base,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.base,
    gap: spacing.md,
  },
});
