import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing, radii } from '@/constants/spacing';
import { FeaturedStory } from '@/types/story';

interface FeaturedStoryCardProps {
  item: FeaturedStory;
  width: number;
}

export default function FeaturedStoryCard({ item, width }: FeaturedStoryCardProps) {
  return (
    <Pressable style={[styles.container, { width }]}>
      <Image
        source={{ uri: item.thumbnailUri }}
        style={[styles.image, { width, height: width * 1.55 }]}
      />

      {item.isMultiSnap ? (
        <View style={styles.multiSnapBadge}>
          <Ionicons name="copy-outline" size={13} color={colors.textPrimary} />
        </View>
      ) : null}

      {item.overlayText ? (
        <View style={styles.textOverlay}>
          <Text style={styles.overlayText} numberOfLines={2}>
            {item.overlayText}
          </Text>
        </View>
      ) : null}

      {item.caption ? (
        <View style={styles.captionBar}>
          <Text style={styles.caption} numberOfLines={1}>
            {item.caption}
          </Text>
        </View>
      ) : null}
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
  multiSnapBadge: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
  },
  textOverlay: {
    position: 'absolute',
    top: '35%',
    left: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.overlayDark,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 6,
  },
  overlayText: {
    color: colors.textPrimary,
    fontSize: 12,
    fontWeight: '600',
  },
  captionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    backgroundColor: colors.overlayDark,
  },
  caption: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
});
