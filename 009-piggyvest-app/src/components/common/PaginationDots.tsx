import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@/constants/colors';

interface PaginationDotsProps {
  count: number;
  activeIndex: number;
}

export default function PaginationDots({ count, activeIndex }: PaginationDotsProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: index === activeIndex ? colors.blueLight : colors.divider },
            index === activeIndex && styles.dotActive,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginVertical: 14,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 18,
  },
});
