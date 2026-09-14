import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '@/constants/colors';

interface AuthHeaderProps {
  title: string;
}

export default function AuthHeader({ title }: AuthHeaderProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.textHeading,
    textAlign: 'center',
  },
});
