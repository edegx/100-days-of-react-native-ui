import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export default function LearnIntro() {
  return (
    <Text style={styles.text}>
      Want to master the market and the Bamboo app? We are here to help
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: spacing.xxl,
    marginVertical: spacing.xxl,
  },
});
