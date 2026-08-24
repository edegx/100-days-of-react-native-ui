import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface CartBarProps {
  itemCount: number;
  total: string;
  onPress?: () => void;
}

export default function CartBar({ itemCount, total, onPress }: CartBarProps) {
  if (itemCount === 0) {
    return null;
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{itemCount}</Text>
        </View>
        <Text style={styles.label}>View cart</Text>
        <View style={styles.rightRow}>
          <Text style={styles.total}>{total}</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.white} />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    paddingVertical: 14,
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  countBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  total: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
  },
});
