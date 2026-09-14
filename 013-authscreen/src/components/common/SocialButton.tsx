import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';
import GoogleIcon from './GoogleIcon';
import { SocialProvider } from '@/types/auth';

interface SocialButtonProps {
  provider: SocialProvider;
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const VARIANT_BACKGROUND: Record<SocialProvider, string> = {
  google: colors.buttonNeutral,
  apple: colors.accentGreen,
  guest: colors.buttonNeutral,
};

const VARIANT_PRESSED: Record<SocialProvider, string> = {
  google: colors.buttonNeutralPressed,
  apple: colors.accentGreenPressed,
  guest: colors.buttonNeutralPressed,
};

function ProviderIcon({ provider }: { provider: SocialProvider }) {
  if (provider === 'google') return <GoogleIcon size={18} />;
  if (provider === 'apple') return <Ionicons name="logo-apple" size={19} color={colors.textHeading} />;
  return <Ionicons name="person-circle-outline" size={19} color={colors.textHeading} />;
}

export default function SocialButton({ provider, label, onPress, style }: SocialButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? VARIANT_PRESSED[provider] : VARIANT_BACKGROUND[provider] },
        style,
      ]}
    >
      <ProviderIcon provider={provider} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: radius.pill,
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textHeading,
  },
});
