import React from 'react';
import { View } from 'react-native';
import { LearnListItem as LearnListItemType } from '@/types';
import LearnListItem from './LearnListItem';

interface LearnListProps {
  items: LearnListItemType[];
}

export default function LearnList({ items }: LearnListProps) {
  return (
    <View>
      {items.map((item) => (
        <LearnListItem key={item.id} item={item} />
      ))}
    </View>
  );
}
