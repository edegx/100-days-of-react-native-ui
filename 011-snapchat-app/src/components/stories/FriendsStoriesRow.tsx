import React from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { friendStories } from '@/data/stories';

const CIRCLE_SIZE = 84;

export default function FriendsStoriesRow() {
  return (
    <View>
      <Pressable style={styles.sectionHeader}>
        <Text style={typography.sectionHeader}>Friends</Text>
        <Ionicons name="chevron-forward" size={18} color={colors.textPrimary} />
      </Pressable>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {friendStories.map((story) => (
          <Pressable key={story.id} style={styles.item}>
            <View style={[styles.ring, { borderColor: story.ringColor }]}>
              <Image source={{ uri: story.thumbnailUri }} style={styles.thumbnail} />
            </View>
            <Text style={styles.name} numberOfLines={2}>
              {story.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.base,
    marginBottom: spacing.md,
  },
  row: {
    paddingHorizontal: spacing.base,
    gap: spacing.md,
  },
  item: {
    width: CIRCLE_SIZE,
    alignItems: 'center',
  },
  ring: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  thumbnail: {
    width: CIRCLE_SIZE - 8,
    height: CIRCLE_SIZE - 8,
    borderRadius: (CIRCLE_SIZE - 8) / 2,
  },
  name: {
    marginTop: spacing.xs,
    fontSize: 12,
    fontWeight: '600',
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
