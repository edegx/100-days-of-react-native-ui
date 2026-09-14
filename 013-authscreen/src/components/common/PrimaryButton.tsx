import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors } from '@/constants/colors';
import { radius } from '@/constants/spacing';

interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
  loading?: boolean;
  style?: ViewStyle;
}

export default function PrimaryButton({ label, onPress, loading, style }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? colors.darkGreenPressed : colors.darkGreen },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
