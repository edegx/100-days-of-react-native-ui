import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AvatarProps {
  source?: ImageSourcePropType;
  size?: number;
}

/**
 * Renders a circular avatar. If no image source is provided (no real user
 * photo asset available), falls back to a simple silhouette placeholder
 * that preserves the same size/shape shown in the design.
 */
export default function Avatar({ source, size = 48 }: AvatarProps) {
  return (
    <View
      style={[
        styles.wrapper,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      {source ? (
        <Image source={source} style={{ width: size, height: size, borderRadius: size / 2 }} />
      ) : (
        <Ionicons name="person" size={size * 0.55} color="#C9B8FF" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    backgroundColor: '#3A2E5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
