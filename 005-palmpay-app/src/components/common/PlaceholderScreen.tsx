import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Screen from '@/components/common/Screen';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { IconSpec } from '@/types';
import AppIcon from '@/components/common/AppIcon';

interface PlaceholderScreenProps {
  title: string;
  subtitle?: string;
  icon: IconSpec;
}

/**
 * Used for tabs that are visible in the bottom navigation of the reference
 * screenshot (Loan, Wealth, Reward, Me) but whose full screen content was
 * not shown in the design. Keeps the same visual language (dark background,
 * purple accent) so the app feels cohesive while navigation is exercised.
 */
export default function PlaceholderScreen({ title, subtitle, icon }: PlaceholderScreenProps) {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <AppIcon icon={icon} size={36} color={colors.purple} />
        </View>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.xxl,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.purpleMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
  },
});
