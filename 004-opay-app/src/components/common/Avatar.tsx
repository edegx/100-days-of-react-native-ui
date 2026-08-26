import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

interface AvatarProps {
  source: ImageSourcePropType;
  size?: number;
  tierLabel?: string;
}

export default function Avatar({ source, size = 48, tierLabel }: AvatarProps) {
  return (
    <View style={[styles.wrapper, { width: size, height: size }]}>
      <Image
        source={source}
        style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
      />
      {tierLabel ? (
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>{tierLabel}</Text>
          <Text style={styles.badgeTier}>Tier</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  image: {
    backgroundColor: colors.cardDark,
  },
  badge: {
    position: 'absolute',
    bottom: -6,
    right: -10,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#E8B84B',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.background,
  },
  badgeNumber: {
    fontSize: 9,
    fontWeight: '800',
    color: '#5A3E00',
    lineHeight: 10,
  },
  badgeTier: {
    fontSize: 5,
    fontWeight: '700',
    color: '#5A3E00',
  },
});
