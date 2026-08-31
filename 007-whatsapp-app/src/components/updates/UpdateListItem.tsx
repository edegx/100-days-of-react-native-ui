import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { UpdateItem } from '@/types';
import Avatar from '../common/Avatar';

interface UpdateListItemProps {
  item: UpdateItem;
}

export default function UpdateListItem({ item }: UpdateListItemProps) {
  return (
    <Pressable style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <Avatar avatar={item.avatar} size={54} ringStyle={item.ringStyle} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
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
    color: colors.textPrimary,
  },
  time: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
