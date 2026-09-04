import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { colors } from '@/constants/colors';

interface ScreenProps {
  children: React.ReactNode;
  edges?: Edge[];
  style?: ViewStyle;
}

export default function Screen({ children, edges = ['top'], style }: ScreenProps) {
  return (
    <SafeAreaView style={[styles.safeArea, style]} edges={edges}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
