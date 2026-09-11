import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@/constants/colors';

interface PageDotsProps {
  count?: number;
  activeIndex?: number;
}

const PageDots: React.FC<PageDotsProps> = ({ count = 2, activeIndex = 0 }) => {
  return (
    <View style={styles.row}>
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          style={[styles.dot, i === activeIndex ? styles.dotActive : styles.dotInactive]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 24,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  dotActive: {
    backgroundColor: colors.purple,
  },
  dotInactive: {
    backgroundColor: colors.textTertiary,
  },
});

export default PageDots;
