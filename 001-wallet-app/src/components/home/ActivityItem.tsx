import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';
import { Transaction } from '@/types';

interface ActivityItemProps {
  transaction: Transaction;
}

export default function ActivityItem({ transaction }: ActivityItemProps) {
  const isReceived = transaction.direction === 'received';
  const actionLabel = isReceived ? 'Received from' : 'Sent to';

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons
          name={isReceived ? 'arrow-down' : 'arrow-up'}
          size={16}
          color={colors.mediumGray}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.actionText}>
          {actionLabel} <Text style={styles.address}>{transaction.counterpartyAddress}</Text>
        </Text>
        <Text style={styles.time}>{transaction.timeAgo}</Text>
      </View>
      <View style={styles.amounts}>
        <Text style={[styles.amountUsd, isReceived && styles.amountReceived]}>
          {transaction.amountUsd}
        </Text>
        <Text style={styles.amountCrypto}>{transaction.amountCrypto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginHorizontal: spacing.xl,
    marginTop: spacing.md,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.iconCircleBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flex: 1,
    marginLeft: spacing.md,
  },
  actionText: {
    fontSize: 15,
    color: colors.mediumGray,
  },
  address: {
    color: colors.black,
    fontWeight: '600',
  },
  time: {
    fontSize: 13,
    color: colors.lightGray,
    marginTop: 2,
  },
  amounts: {
    alignItems: 'flex-end',
  },
  amountUsd: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  amountReceived: {
    color: colors.green,
  },
  amountCrypto: {
    fontSize: 12,
    color: colors.lightGray,
    marginTop: 2,
  },
});
