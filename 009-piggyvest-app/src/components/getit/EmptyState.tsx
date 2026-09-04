import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconCircle}>
        <Feather name="pie-chart" size={36} color={colors.white} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xxxl * 2,
    paddingHorizontal: spacing.xxxl,
  },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});
