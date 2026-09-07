import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StockItem } from '@/types';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

interface StockListItemProps {
  stock: StockItem;
}

export default function StockListItem({ stock }: StockListItemProps) {
  const changeColor = stock.isPositive ? colors.greenAccent : colors.red;

  return (
    <Pressable style={styles.row}>
      <View style={[styles.logo, { backgroundColor: stock.logoBackgroundColor }]}>
        <Text style={styles.logoText} numberOfLines={1}>
          {stock.logoInitial}
        </Text>
      </View>

      <View style={styles.nameColumn}>
        <Text style={styles.name} numberOfLines={1}>
          {stock.name}
        </Text>
        <Text style={styles.ticker}>{stock.ticker}</Text>
      </View>

      <View style={styles.priceColumn}>
        <Text style={styles.price}>{stock.price}</Text>
        <View style={styles.changeRow}>
          <Text style={[styles.change, { color: changeColor }]}>{stock.change}</Text>
          <Ionicons
            name={stock.isPositive ? 'caret-up' : 'caret-down'}
            size={12}
            color={changeColor}
          />
          <Text style={[styles.change, { color: changeColor }]}>{stock.changePercent}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 9,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  nameColumn: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  ticker: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  priceColumn: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  change: {
    fontSize: 12,
    fontWeight: '600',
  },
});
