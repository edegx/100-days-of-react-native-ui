import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

interface CheckoutHeaderProps {
  restaurantName: string;
}

export default function CheckoutHeader({ restaurantName }: CheckoutHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={8} style={styles.backButton}>
        <Ionicons name="chevron-back" size={20} color={colors.black} />
      </Pressable>
      <View style={styles.textBlock}>
        <Text style={styles.label}>Checkout</Text>
        <Text style={styles.title}>{restaurantName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    gap: spacing.md,
  },
  backButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    alignItems: 'center',
    flex: 1,
    marginRight: 30,
  },
  label: {
    fontSize: 12,
    color: colors.mediumGray,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.black,
    marginTop: 2,
  },
});
