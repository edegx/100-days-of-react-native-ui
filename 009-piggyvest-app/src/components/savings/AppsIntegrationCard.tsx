import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

export default function AppsIntegrationCard() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Apps & Integrations</Text>

      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Feather name="credit-card" size={22} color={colors.purple} />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.title}>Connect PocketApp®</Text>
          <Text style={styles.subtitle}>Spend smarter, enjoy faster withdrawals ⚡</Text>
        </View>

        <Pressable style={styles.startButton}>
          <Text style={styles.startText}>START</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.backgroundElevated,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.xl,
  },
  heading: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  startButton: {
    backgroundColor: colors.purple,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.pill,
  },
  startText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 13,
  },
});
