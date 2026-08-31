import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { SettingsListItemData } from '@/types';

interface SettingsListItemProps {
  item: SettingsListItemData;
}

export default function SettingsListItem({ item }: SettingsListItemProps) {
  return (
    <Pressable style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <Ionicons
        name={item.icon as keyof typeof Ionicons.glyphMap}
        size={22}
        color={colors.textSecondary}
        style={styles.icon}
      />
      <Text style={styles.label}>{item.label}</Text>
      {item.showChevron && (
        <Ionicons name="chevron-forward" size={18} color={colors.textTertiary} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md + 2,
  },
  pressed: {
    backgroundColor: colors.overlayLight,
  },
  icon: {
    width: 28,
  },
  label: {
    ...typography.body,
    color: colors.textPrimary,
    flex: 1,
    marginLeft: spacing.sm,
  },
});
