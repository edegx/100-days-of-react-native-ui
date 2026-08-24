import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';

interface RatingBadgeProps {
  rating: number;
  count?: string;
  size?: number;
  textColor?: string;
}

export default function RatingBadge({
  rating,
  count,
  size = 12,
  textColor = colors.darkGray,
}: RatingBadgeProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="star" size={size} color={colors.star} />
      <Text style={[styles.text, { color: textColor, fontSize: size + 1 }]}>
        {rating.toFixed(1)}
        {count ? ` (${count})` : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    fontWeight: '500',
  },
});
