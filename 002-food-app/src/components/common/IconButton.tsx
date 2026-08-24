import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';

interface IconButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  size?: number;
  iconSize?: number;
  backgroundColor?: string;
  iconColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function IconButton({
  iconName,
  size = 36,
  iconSize = 18,
  backgroundColor = colors.white,
  iconColor = colors.black,
  onPress,
  style,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
        style,
      ]}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
