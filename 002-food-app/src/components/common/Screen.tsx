import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';

import { colors } from '@/constants/colors';

interface ScreenProps extends ViewProps {
  children: React.ReactNode;
  edges?: Edge[];
  backgroundColor?: string;
}

export default function Screen({
  children,
  style,
  edges = ['top', 'left', 'right'],
  backgroundColor = colors.background,
  ...rest
}: ScreenProps) {
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor }]}
      edges={edges}
    >
      <View style={[styles.container, { backgroundColor }, style]} {...rest}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
