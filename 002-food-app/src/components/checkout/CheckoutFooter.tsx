import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface CheckoutFooterProps {
  total: string;
  onPress?: () => void;
}

export default function CheckoutFooter({ total, onPress }: CheckoutFooterProps) {
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Next</Text>
        <Text style={styles.buttonText}>{total}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    marginHorizontal: spacing.lg,
    paddingVertical: 16,
    paddingHorizontal: spacing.xl,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
});
