import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '@/constants/colors';

interface AuthFooterLinkProps {
  prompt: string;
  actionLabel: string;
  onPress?: () => void;
}

export default function AuthFooterLink({ prompt, actionLabel, onPress }: AuthFooterLinkProps) {
  return (
    <Text style={styles.text}>
      {prompt}{' '}
      <Text style={styles.action} onPress={onPress}>
        {actionLabel}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.textMuted,
  },
  action: {
    color: colors.textHeading,
    fontWeight: '700',
  },
});
