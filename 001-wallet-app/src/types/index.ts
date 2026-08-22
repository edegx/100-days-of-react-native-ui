export type TransactionDirection = 'sent' | 'received';

export interface Transaction {
  id: string;
  direction: TransactionDirection;
  counterpartyAddress: string;
  timeAgo: string;
  amountUsd: string;
  amountCrypto: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: 'home' | 'history' | 'cards' | 'rewards';
  route: string;
}
