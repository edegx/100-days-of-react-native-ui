import React from 'react';
import { View } from 'react-native';
import { StockItem } from '@/types';
import StockListItem from './StockListItem';

interface StockListProps {
  stocks: StockItem[];
}

export default function StockList({ stocks }: StockListProps) {
  return (
    <View>
      {stocks.map((stock) => (
        <StockListItem key={stock.id} stock={stock} />
      ))}
    </View>
  );
}
