import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PillButton from '@/components/common/PillButton';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface LoanBannerProps {
  title: string;
  subtitle: string;
  activeDotIndex?: number;
  dotCount?: number;
  onPressBorrow?: () => void;
}

export default function LoanBanner({
  title,
  subtitle,
  activeDotIndex = 2,
  dotCount = 3,
  onPressBorrow,
}: LoanBannerProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="wallet-outline" size={26} color={colors.purple} />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <PillButton label="Borrow" variant="outline" onPress={onPressBorrow} />
      </View>

      <View style={styles.dots}>
        {Array.from({ length: dotCount }).map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeDotIndex && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.purpleMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.xs,
    marginTop: spacing.lg,
  },
  dot: {
    width: 16,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.purple,
    width: 20,
  },
});
