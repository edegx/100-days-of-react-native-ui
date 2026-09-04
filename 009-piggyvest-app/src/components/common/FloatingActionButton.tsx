import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface FloatingActionButtonProps {
  onPress?: () => void;
}

export default function FloatingActionButton({ onPress }: FloatingActionButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Feather name="plus" size={26} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 16,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
});
