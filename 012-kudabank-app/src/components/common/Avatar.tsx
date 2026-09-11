import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '@/constants/colors';

interface AvatarProps {
  size?: number;
  source: { uri: string } | number;
  showBadge?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ size = 44, source, showBadge = true }) => {
  return (
    <View style={{ width: size, height: size }}>
      <Image
        source={source}
        style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
      />
      {showBadge && (
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.surface,
  },
  badge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E0A82E',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.background,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFE8A3',
  },
});

export default Avatar;
