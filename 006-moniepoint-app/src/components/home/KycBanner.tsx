import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

interface KycBannerProps {
  onViewDetailsPress?: () => void;
}

export default function KycBanner({ onViewDetailsPress }: KycBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={styles.iconCircle}>
          <Ionicons name="alert" size={14} color={colors.textPrimary} />
        </View>
        <Text style={styles.title}>KYC Corrections</Text>
      </View>
      <Text style={styles.body}>
        Some of your KYC corrections are being verified{' '}
        <Text style={styles.link} onPress={onViewDetailsPress}>
          View Details
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bannerBackground,
    borderTopWidth: 3,
    borderTopColor: colors.bannerBorder,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  iconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.bannerIcon,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  body: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  link: {
    color: colors.accentYellow,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
