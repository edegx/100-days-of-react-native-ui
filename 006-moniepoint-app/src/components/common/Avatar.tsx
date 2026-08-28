import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface AvatarProps {
  uri: string;
  size?: number;
}

export default function Avatar({ uri, size = 44 }: AvatarProps) {
  return (
    <Image
      source={{ uri }}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#333',
  },
});
