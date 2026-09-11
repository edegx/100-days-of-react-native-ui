import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';

const PayHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pay</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  title: {
    ...typography.screenTitle,
    fontSize: 22,
    color: colors.textPrimary,
  },
});

export default PayHeader;
