import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AssetOffering } from '@/types';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface AssetOfferingCardProps {
  offering: AssetOffering;
}

export default function AssetOfferingCard({ offering }: AssetOfferingCardProps) {
  return (
    <Pressable style={styles.card}>
      {offering.isNew && (
        <View style={styles.badge}>
          <Text style={styles.badgeLabel}>New</Text>
        </View>
      )}
      <Text style={styles.emoji}>{offering.emoji}</Text>
      <Text style={styles.title}>{offering.title}</Text>
      <Text style={styles.description}>{offering.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    minHeight: 170,
  },
  badge: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: colors.textPrimary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.pill,
  },
  badgeLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.background,
  },
  emoji: {
    fontSize: 32,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
});
