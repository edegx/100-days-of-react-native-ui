import React from 'react';
import { StyleSheet, View } from 'react-native';
import QuickActionItem from '@/components/home/QuickActionItem';
import { quickActions } from '@/data/quickActions';
import { spacing } from '@/constants/spacing';

interface QuickActionsProps {
  onPressItem?: (id: string) => void;
}

export default function QuickActions({ onPressItem }: QuickActionsProps) {
  return (
    <View style={styles.row}>
      {quickActions.map((item) => (
        <QuickActionItem key={item.id} item={item} onPress={() => onPressItem?.(item.id)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
});
