import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { radii } from '@/constants/spacing';
import { DiscoverStory } from '@/types/story';

interface DiscoverCardProps {
  item: DiscoverStory;
  width: number;
}

export default function DiscoverCard({ item, width }: DiscoverCardProps) {
  return (
    <Pressable style={[styles.container, { width }]}>
      <Image source={{ uri: item.thumbnailUri }} style={[styles.image, { width, height: width * 1.5 }]} />
      <View style={styles.overlay}>
        {item.hasStarBadge ? (
          <View style={styles.starBadge}>
            <Ionicons name="star" size={10} color={colors.background} />
          </View>
        ) : null}
        <Text style={styles.title} numberOfLines={1}>
          {item.title} {item.flagEmoji ?? ''}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radii.md,
    overflow: 'hidden',
    backgroundColor: colors.surfaceElevated,
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    backgroundColor: colors.overlayDark,
  },
  starBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '700',
    flexShrink: 1,
  },
});
