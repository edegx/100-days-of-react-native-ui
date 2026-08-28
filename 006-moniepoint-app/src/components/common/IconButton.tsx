import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface IconButtonProps {
  name: React.ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function IconButton({
  name,
  size = 22,
  color = colors.textPrimary,
  onPress,
  style,
}: IconButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]} hitSlop={8}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
