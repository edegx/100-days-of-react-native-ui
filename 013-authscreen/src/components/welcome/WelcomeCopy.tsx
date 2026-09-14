import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export default function WelcomeCopy() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grow a little{'\n'}every single day</Text>
      <Text style={styles.subtitle}>
        Track your habits, reflect on your progress, and get matched with a coach who keeps you accountable.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textHeading,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: spacing.lg,
  },
});
