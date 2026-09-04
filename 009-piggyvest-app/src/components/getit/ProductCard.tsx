import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ProductItem } from '@/types';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface ProductCardProps {
  item: ProductItem;
  onPress?: () => void;
}

export default function ProductCard({ item, onPress }: ProductCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.categoryTag}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>

      <View style={styles.priceTag}>
        <Text style={styles.priceText}>{item.priceLabel}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
  },
  imageWrapper: {
    width: 250,
    height: 230,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryTag: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: spacing.sm,
  },
  priceTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,122,26,0.15)',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
  },
  priceText: {
    color: colors.orangeLight,
    fontSize: 13,
    fontWeight: '700',
  },
});
