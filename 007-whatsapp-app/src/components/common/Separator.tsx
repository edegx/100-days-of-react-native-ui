import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@/constants/colors';

interface SeparatorProps {
  inset?: number;
}

export default function Separator({ inset = 0 }: SeparatorProps) {
  return <View style={[styles.line, { marginLeft: inset }]} />;
}

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
  },
});
