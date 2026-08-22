import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface ActionButtonProps {
  label?: string;
  iconName: keyof typeof Ionicons.glyphMap;
  variant?: 'wide' | 'square';
  onPress?: () => void;
}

export default function ActionButton({
  label,
  iconName,
  variant = 'wide',
  onPress,
}: ActionButtonProps) {
  return (
    <Pressable
      style={[
        styles.container,
        variant === 'square' ? styles.square : styles.wide,
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Ionicons name={iconName} size={18} color={colors.black} />
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pill,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wide: {
    flex: 1,
    paddingVertical: 16,
  },
  square: {
    width: 52,
    height: 52,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
});
