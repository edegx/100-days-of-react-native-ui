import type { ComponentProps } from 'react';
import type { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export type IoniconName = ComponentProps<typeof Ionicons>['name'];
export type MaterialCommunityIconName = ComponentProps<typeof MaterialCommunityIcons>['name'];
export type FontAwesome5IconName = ComponentProps<typeof FontAwesome5>['name'];

export type IconFamily = 'ionicons' | 'material-community' | 'font-awesome-5';

export interface IconSpec {
  family: IconFamily;
  name: string;
  color?: string;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: IconSpec;
  badge?: string;
  route?: string;
}

export interface ServiceItem {
  id: string;
  label: string;
  icon: IconSpec;
  iconBackground: string;
  badge?: string;
  route?: string;
}

export interface Transaction {
  id: string;
  title: string;
  amount: string;
  status: 'Success' | 'Pending' | 'Failed';
  date: string;
}

export interface PromoCard {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  valueSuffix?: string;
  footnote?: string;
}

export interface TabItem {
  id: string;
  label: string;
  icon: IconSpec;
  route: string;
}
