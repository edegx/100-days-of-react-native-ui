export interface PromoCard {
  id: string;
  title: string;
  backgroundColor: string;
  textColor: string;
  iconType: 'image' | 'emoji' | 'whatsapp';
  imageUri?: string;
  emoji?: string;
}

export interface WalletItem {
  id: string;
  name: string;
  balance: string;
  flagEmoji: string;
  iconBackgroundColor: string;
}

export interface AssetOffering {
  id: string;
  title: string;
  description: string;
  emoji: string;
  isNew?: boolean;
}

export interface LearnListItem {
  id: string;
  question: string;
  emoji: string;
}

export interface LearnTab {
  id: string;
  label: string;
  items: LearnListItem[];
}

export interface StockItem {
  id: string;
  name: string;
  ticker: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  logoUri?: string;
  logoBackgroundColor?: string;
  logoInitial?: string;
}

export interface SearchCategory {
  id: string;
  title: string;
  backgroundColor: string;
  textColor: string;
  emoji: string;
}

export type FilterOption = 'all' | 'usd' | 'naira';
export type StockFilterOption = 'all' | 'stocks' | 'etfs';
