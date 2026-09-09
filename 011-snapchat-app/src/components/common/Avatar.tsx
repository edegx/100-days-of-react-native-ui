import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

interface AvatarProps {
  uri: string;
  size?: number;
  ringColor?: string;
  ringWidth?: number;
}

export default function Avatar({ uri, size = 52, ringColor, ringWidth = 2.5 }: AvatarProps) {
  const containerSize = size + (ringColor ? ringWidth * 2 : 0);

  return (
    <View
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
          borderWidth: ringColor ? ringWidth : 0,
          borderColor: ringColor ?? 'transparent',
        },
      ]}
    >
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
