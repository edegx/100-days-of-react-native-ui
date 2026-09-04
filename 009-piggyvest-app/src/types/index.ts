export interface SavingsPlan {
  id: string;
  title: string;
  description: string;
  badgeLabel: string;
  badgeColor: string;
  badgeTextColor?: string;
  borderColor: string;
  backgroundColor: string;
  icon?: 'wallet' | 'lock' | 'target' | 'house' | 'dollar' | 'menu';
  route?: string;
}

export interface SuggestionItem {
  id: string; 
  imageUrl: string; 
}

export interface MediaItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  isBlogCard?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  timeAgo: string;
  icon: 'wallet' | 'shield';
  iconBackground: string;
  iconColor: string;
  menuColor: string;
}

export type GetItTabKey = 'explore' | 'ongoing' | 'complete' | 'rewards';

export interface ProductItem {
  id: string;
  category: string;
  title: string;
  description: string;
  priceLabel: string;
  imageUrl: string;
}

export interface ProductSectionData {
  id: string;
  title: string;
  emoji: string;
  subtitle: string;
  items: ProductItem[];
}

export interface VettedOpportunity {
  id: string;
  imageUri: string,
  gradientColors: [string, string];
  borderColor: string;
  badgeLabel: string;
  badgeColor: string;
  rate: string;
  rateLabel: string;
  investors: string;
  title: string;
  returnsLabel: string;
}

export type InvestTabKey = 'active' | 'matured';

export type BottomTabKey = 'home' | 'savings' | 'get-it' | 'invest' | 'account';
