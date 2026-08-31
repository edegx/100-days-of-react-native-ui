import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { AvatarInfo } from '@/types';

interface AvatarProps {
  avatar: AvatarInfo;
  size?: number;
  ringStyle?: 'solid' | 'dashed' | 'partial' | 'none';
}

export default function Avatar({ avatar, size = 56, ringStyle = 'none' }: AvatarProps) {
  const ringPadding = ringStyle === 'none' ? 0 : 3;
  const innerSize = size - ringPadding * 2;

  const ringColor =
    ringStyle === 'partial' ? colors.textTertiary : colors.green;

  const content = (
    <View
      style={[
        styles.circle,
        {
          width: innerSize,
          height: innerSize,
          borderRadius: innerSize / 2,
          backgroundColor: avatar.color,
        },
      ]}
    >
      <Text style={[styles.initials, { fontSize: innerSize * 0.36 }]}>
        {avatar.initials}
      </Text>
    </View>
  );

  if (ringStyle === 'none') {
    return (
      <View style={{ width: size, height: size }}>
        {content}
      </View>
    );
  }

  return (
    <View
      style={[
        styles.ring,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: ringColor,
          borderStyle: ringStyle === 'dashed' ? 'dashed' : 'solid',
          borderWidth: ringStyle === 'partial' ? 1.5 : 2,
        },
      ]}
    >
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: colors.white,
    fontWeight: '600',
  },
  ring: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
