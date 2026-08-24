import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { Category } from '@/types';

interface CategoryItemProps {
  category: Category;
  onPress?: () => void;
}

export default function CategoryItem({ category, onPress }: CategoryItemProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: category.imageUri }} style={styles.image} />
      </View>
      <Text style={styles.name}>{category.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 62,
  },
  imageWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: colors.chipBackground,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 11,
    color: colors.darkGray,
    marginTop: 6,
    textAlign: 'center',
  },
});
