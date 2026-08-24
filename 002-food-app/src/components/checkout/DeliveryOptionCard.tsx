import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';
import { DeliveryOption } from '@/types';

interface DeliveryOptionCardProps {
  option: DeliveryOption;
  isSelected: boolean;
  onPress: () => void;
}

export default function DeliveryOptionCard({
  option,
  isSelected,
  onPress,
}: DeliveryOptionCardProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      onPress={onPress}
    >
      <View style={styles.headerRow}>
        <Text style={styles.label}>{option.label}</Text>
        {option.timeRange ? (
          <Text style={styles.timeRange}>{option.timeRange}</Text>
        ) : null}
      </View>
      <Text style={styles.note}>{option.note}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.divider,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  containerSelected: {
    borderColor: colors.black,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
  },
  timeRange: {
    fontSize: 11,
    color: colors.mediumGray,
  },
  note: {
    fontSize: 11,
    color: colors.mediumGray,
    marginTop: 6,
    lineHeight: 15,
  },
});
