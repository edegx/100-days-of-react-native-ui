import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface PillButtonProps {
  label: string;
  onPress?: () => void;
  variant?: 'solid' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function PillButton({
  label,
  onPress,
  variant = 'solid',
  style,
  textStyle,
}: PillButtonProps) {
  const isOutline = variant === 'outline';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isOutline ? styles.outline : styles.solid,
        pressed && { opacity: 0.75 },
        style,
      ]}
    >
      <Text style={[styles.label, isOutline && styles.outlineLabel, textStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solid: {
    backgroundColor: colors.pillBlack,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.purple,
  },
  label: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  outlineLabel: {
    color: colors.purple,
  },
});
