import type { ComponentProps } from 'react';
import type { Ionicons } from '@expo/vector-icons';

type IoniconName = ComponentProps<typeof Ionicons>['name'];

export interface ServiceItemData {
  id: string;
  label: string;
  icon: IoniconName;
}

export interface TransactionData {
  id: string;
  title: string;
  date: string;
  amount: string;
  direction: 'in' | 'out';
}

export interface RewardData {
  id: string;
  label: string;
  amount: string;
  emoji: string;
  tileColor: string;
}

export interface NavItemData {
  id: string;
  label: string;
  icon: IoniconName;
  route: string;
}
