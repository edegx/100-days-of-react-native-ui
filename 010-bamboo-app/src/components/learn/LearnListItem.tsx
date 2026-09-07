import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LearnListItem as LearnListItemType } from '@/types';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface LearnListItemProps {
  item: LearnListItemType;
}

export default function LearnListItem({ item }: LearnListItemProps) {
  return (
    <Pressable style={styles.row}>
      <View style={styles.iconBox}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <Text style={styles.question}>{item.question}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  iconBox: {
    width: 36,
    height: 24,
    borderRadius: radius.sm,
    backgroundColor: colors.greenAccent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 13,
  },
  question: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
    lineHeight: 22,
  },
});
