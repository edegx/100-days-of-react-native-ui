import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '@/constants/colors';

interface IconButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  size?: number;
  backgroundColor?: string;
  style?: ViewStyle;
}

export default function IconButton({
  children,
  onPress,
  size = 40,
  backgroundColor = 'rgba(255,255,255,0.12)',
  style,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
      hitSlop={8}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
