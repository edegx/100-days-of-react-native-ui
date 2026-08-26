import { ReactNode } from 'react';

export interface QuickAction {
  id: string;
  title: string;
  icon: ReactNode;
  badgeText?: string;
  badgeColor?: string;
}

export interface TransferAction {
  id: string;
  title: string;
  icon: ReactNode;
}

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: string;
  isCredit: boolean;
  status: 'Successful' | 'Pending' | 'Failed';
}

export interface NavItem {
  id: string;
  label: string;
  route: string;
  icon: (color: string) => ReactNode;
}
