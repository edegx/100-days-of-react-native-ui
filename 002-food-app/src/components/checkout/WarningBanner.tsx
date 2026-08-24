import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface WarningBannerProps {
  message: string;
  actionLabel: string;
  onActionPress?: () => void;
}

export default function WarningBanner({
  message,
  actionLabel,
  onActionPress,
}: WarningBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="warning" size={16} color={colors.warningIcon} />
        <Text style={styles.message}>{message}</Text>
      </View>
      <Pressable style={styles.button} onPress={onActionPress}>
        <Text style={styles.buttonText}>{actionLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.warningBackground,
    borderRadius: radius.lg,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    padding: spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  message: {
    flex: 1,
    fontSize: 12,
    color: colors.darkGray,
    lineHeight: 17,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: spacing.md,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
});
