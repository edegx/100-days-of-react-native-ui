import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface AvatarProps {
  size?: number;
}

export default function Avatar({ size = 40 }: AvatarProps) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Ionicons name="person" size={size * 0.55} color={colors.background} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
