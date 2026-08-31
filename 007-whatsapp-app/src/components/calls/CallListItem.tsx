import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { CallItem } from '@/types';
import Avatar from '../common/Avatar';

interface CallListItemProps {
  item: CallItem;
}

const typeConfig = {
  missed: { icon: 'call' as const, color: colors.red, label: 'Missed', arrow: 'arrow-down-outline' as const },
  outgoing: { icon: 'call' as const, color: colors.textSecondary, label: 'Outgoing', arrow: 'arrow-up-outline' as const },
  incoming: { icon: 'call' as const, color: colors.textSecondary, label: 'Incoming', arrow: 'arrow-down-outline' as const },
};

export default function CallListItem({ item }: CallListItemProps) {
  const config = typeConfig[item.type];
  const nameColor = item.type === 'missed' ? colors.red : colors.textPrimary;

  return (
    <Pressable style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <Avatar avatar={item.avatar} size={54} />
      <View style={styles.content}>
        <Text style={[styles.name, { color: nameColor }]} numberOfLines={1}>
          {item.name}
          {item.count ? `  (${item.count})` : ''}
        </Text>
        <View style={styles.metaRow}>
          <Ionicons name={config.arrow} size={13} color={colors.textSecondary} />
          <Text style={styles.meta}>{config.label}</Text>
        </View>
      </View>
      <Text style={styles.date}>{item.date}</Text>
      <Ionicons
        name="information-circle-outline"
        size={22}
        color={colors.textSecondary}
        style={styles.infoIcon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
  },
  pressed: {
    backgroundColor: colors.overlayLight,
  },
  content: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    ...typography.bodyMedium,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    gap: 4,
  },
  meta: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  date: {
    ...typography.caption,
    color: colors.textSecondary,
    marginRight: spacing.md,
  },
  infoIcon: {
    marginLeft: spacing.xs,
  },
});
