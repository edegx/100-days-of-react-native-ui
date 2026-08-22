import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

interface AvatarProps {
  source: ImageSourcePropType;
  size?: number;
}

export default function Avatar({ source, size = 56 }: AvatarProps) {
  return (
    <Image
      source={source}
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#000',
  },
});
