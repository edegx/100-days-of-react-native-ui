import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

interface CollapsibleSectionHeaderProps {
  title: string;
  expanded: boolean;
  onToggle: () => void;
}

export default function CollapsibleSectionHeader({
  title,
  expanded,
  onToggle,
}: CollapsibleSectionHeaderProps) {
  return (
    <Pressable style={styles.row} onPress={onToggle}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons
        name={expanded ? 'chevron-up' : 'chevron-down'}
        size={20}
        color={colors.textPrimary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});
