import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

export default function ProgressBar({ totalSteps, currentStep }: ProgressBarProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.segment,
            { backgroundColor: index < currentStep ? colors.accentGreen : colors.progressTrack },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
});
