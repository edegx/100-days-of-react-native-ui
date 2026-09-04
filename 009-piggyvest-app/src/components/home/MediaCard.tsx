import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MediaItem } from '@/types';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface MediaCardProps {
  item: MediaItem;
  onPress?: () => void;
}

export default function MediaCard({ item, onPress }: MediaCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      {item.isBlogCard ? (
        <View style={styles.blogCard}>
          <View style={styles.speechBubble}>
            <View style={[styles.coin, { backgroundColor: '#F5B942' }]} />
            <View style={[styles.coin, { backgroundColor: colors.blueLight, marginLeft: -10 }]} />
            <View style={[styles.coin, { backgroundColor: colors.greenLight, marginLeft: -10 }]} />
          </View>
          <View style={styles.blogButton}>
            <Text style={styles.blogButtonText}>Our Blog</Text>
          </View>
        </View>
      ) : (
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      )}

      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      {item.subtitle ? (
        <Text style={styles.subtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 190,
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: radius.lg,
    marginBottom: spacing.sm,
  },
  blogCard: {
    width: 190,
    height: 190,
    borderRadius: radius.lg,
    marginBottom: spacing.sm,
    backgroundColor: '#F4F6EF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  speechBubble: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coin: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#F4F6EF',
  },
  blogButton: {
    backgroundColor: colors.green,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
  },
  blogButtonText: {
    color: colors.white,
    fontWeight: '700',
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
});
