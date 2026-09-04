import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ActivityItem } from '@/types';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

const ICONS: Record<ActivityItem['icon'], keyof typeof Feather.glyphMap> = {
  wallet: 'credit-card',
  shield: 'shield',
};

export default function ActivityRow({ item, isLast }: { item: ActivityItem; isLast?: boolean }) {
  return (
    <View style={[styles.row, !isLast && styles.divider]}>
      <View style={[styles.iconCircle, { backgroundColor: item.iconBackground }]}>
        <Feather name={ICONS[item.icon]} size={18} color={item.iconColor} />
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.timeAgo}</Text>
      </View>

      <Pressable style={[styles.menu, { backgroundColor: item.menuColor }]} hitSlop={8}>
        <Feather name="more-horizontal" size={16} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  time: {
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 2,
  },
  menu: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
  },
});
