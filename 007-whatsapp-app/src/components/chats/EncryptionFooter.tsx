import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';

export default function EncryptionFooter() {
  return (
    <View style={styles.wrapper}>
      <Ionicons name="lock-closed" size={13} color={colors.textSecondary} />
      <Text style={styles.text}>
        Your personal messages are{' '}
        <Text style={styles.link}>end-to-end encrypted</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.xxl,
  },
  text: {
    ...typography.caption,
    color: colors.textSecondary,
    marginLeft: spacing.xs,
    textAlign: 'center',
  },
  link: {
    color: colors.green,
  },
});
