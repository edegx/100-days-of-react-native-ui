import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

interface InfoRowProps {
  iconName: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
  trailingText?: string;
  onPress?: () => void;
}

export default function InfoRow({
  iconName,
  title,
  subtitle,
  trailingText,
  onPress,
}: InfoRowProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons name={iconName} size={18} color={colors.black} />
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {trailingText ? (
        <Text style={styles.trailingText}>{trailingText}</Text>
      ) : (
        <Ionicons name="chevron-forward" size={16} color={colors.mediumGray} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
  },
  subtitle: {
    fontSize: 12,
    color: colors.mediumGray,
    marginTop: 2,
  },
  trailingText: {
    fontSize: 13,
    color: colors.lightGray,
  },
});
