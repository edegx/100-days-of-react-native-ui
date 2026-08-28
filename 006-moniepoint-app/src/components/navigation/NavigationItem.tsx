import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import type { NavItemData } from '@/types';

interface NavigationItemProps {
  item: NavItemData;
  isActive: boolean;
  onPress: (item: NavItemData) => void;
}

export default function NavigationItem({ item, isActive, onPress }: NavigationItemProps) {
  const color = isActive ? colors.accentYellow : colors.textSecondary;
  return (
    <Pressable style={styles.container} onPress={() => onPress(item)}>
      <Ionicons name={item.icon} size={22} color={color} />
      <Text style={[styles.label, { color }]}>{item.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
});
