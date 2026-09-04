import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

interface AvatarProps {
  size?: number;
  onPress?: () => void;
  uri?: string;
}

const DEFAULT_URI =
  'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80';

export default function Avatar({ size = 52, onPress, uri = DEFAULT_URI }: AvatarProps) {
  const dimensionStyle = { width: size, height: size, borderRadius: size / 2 };

  return (
    <Pressable onPress={onPress} hitSlop={8}>
      <Image source={{ uri }} style={[styles.image, dimensionStyle]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
});
