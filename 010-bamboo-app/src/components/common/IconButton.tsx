import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

interface IconButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  hitSlop?: number;
}

export default function IconButton({ children, onPress, style, hitSlop = 8 }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={hitSlop}
      style={({ pressed }) => [styles.base, style, pressed && styles.pressed]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
});
