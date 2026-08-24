import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface AddressCardProps {
  addressLine1: string;
  addressLine2: string;
  onPress?: () => void;
}

export default function AddressCard({
  addressLine1,
  addressLine2,
  onPress,
}: AddressCardProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconWrap}>
        <Ionicons name="home-outline" size={18} color={colors.black} />
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.line}>{addressLine1}</Text>
        <Text style={styles.line}>{addressLine2}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.mediumGray} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.chipBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
  },
  line: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    lineHeight: 19,
  },
});
