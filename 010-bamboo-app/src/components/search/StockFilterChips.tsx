import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StockFilterOption } from '@/types';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface StockFilterChipsProps {
  selected: StockFilterOption;
  onSelect: (option: StockFilterOption) => void;
}

const options: { key: StockFilterOption; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'stocks', label: 'Stocks' },
  { key: 'etfs', label: 'ETFs' },
];

export default function StockFilterChips({ selected, onSelect }: StockFilterChipsProps) {
  return (
    <View style={styles.row}>
      {options.map((option) => {
        const isActive = option.key === selected;
        return (
          <Pressable
            key={option.key}
            onPress={() => onSelect(option.key)}
            style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
          >
            <Text style={[styles.label, isActive ? styles.labelActive : styles.labelInactive]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  chip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: 10,
    borderRadius: radius.pill,
  },
  chipActive: {
    backgroundColor: colors.textPrimary,
  },
  chipInactive: {
    backgroundColor: colors.greenDark,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  labelActive: {
    color: colors.background,
  },
  labelInactive: {
    color: colors.greenAccent,
  },
});
