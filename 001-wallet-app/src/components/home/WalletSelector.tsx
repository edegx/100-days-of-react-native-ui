import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface WalletSelectorProps {
  walletName: string;
  walletAddress: string;
  onPress?: () => void;
}

export default function WalletSelector({
  walletName,
  walletAddress,
  onPress,
}: WalletSelectorProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.walletName}>{walletName}</Text>
        <Text style={styles.walletAddress}>{walletAddress}</Text>
      </View>
      <View style={styles.divider} />
      <Ionicons name="chevron-down" size={16} color={colors.black} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  walletName: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.black,
  },
  walletAddress: {
    fontSize: 11,
    color: colors.lightGray,
    marginTop: 1,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: colors.divider,
  },
});
