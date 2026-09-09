import React from 'react';
import { Pressable, View, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import Badge from './Badge';

interface IconButtonProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  backgroundColor?: string;
  containerSize?: number;
  badgeCount?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function IconButton({
  name,
  size = 20,
  color = colors.textPrimary,
  backgroundColor = colors.surfaceElevated,
  containerSize = 40,
  badgeCount,
  onPress,
  style,
}: IconButtonProps) {
  return (
    <Pressable onPress={onPress} style={style}>
      <View
        style={[
          styles.container,
          {
            width: containerSize,
            height: containerSize,
            borderRadius: containerSize / 2,
            backgroundColor,
          },
        ]}
      >
        <Ionicons name={name} size={size} color={color} />
        {badgeCount ? <Badge label={badgeCount} style={styles.badgePosition} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgePosition: {
    position: 'absolute',
    top: -4,
    right: -4,
  },
});
