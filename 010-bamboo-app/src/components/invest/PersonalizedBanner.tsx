import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

export default function PersonalizedBanner() {
  return (
    <View style={styles.card}>
      <View style={styles.textColumn}>
        <Text style={styles.title}>Personalised investing?</Text>
        <Text style={styles.subtitle}>Set up your account to work for you.</Text>
        <Pressable style={styles.ctaRow}>
          <Text style={styles.ctaLabel}>Get Started</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.yellow} />
        </Pressable>
      </View>
      <View style={styles.iconColumn}>
        <View style={styles.trophyBase} />
        <View style={styles.trophyCup} />
        <View style={styles.trophyBall} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    backgroundColor: '#123324',
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xxl,
    overflow: 'hidden',
  },
  textColumn: {
    flex: 1,
    paddingRight: spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ctaLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.yellow,
  },
  iconColumn: {
    width: 90,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  trophyBase: {
    width: 60,
    height: 46,
    backgroundColor: colors.greenBright,
    borderRadius: 8,
    transform: [{ rotate: '45deg' }],
  },
  trophyCup: {
    position: 'absolute',
    top: 10,
    width: 34,
    height: 60,
    backgroundColor: colors.greenBright,
    borderRadius: 10,
  },
  trophyBall: {
    position: 'absolute',
    top: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#D4C48A',
  },
});
