import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import IconButton from '@/components/common/IconButton';

export default function SearchScreenHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <IconButton onPress={() => router.back()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
      </IconButton>
      <Text style={styles.title}>Search Stocks</Text>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  back: {
    width: 32,
    height: 32,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginRight: 32,
  },
  spacer: {
    width: 32,
  },
});
