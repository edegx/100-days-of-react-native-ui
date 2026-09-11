import {
  PhoneIcon,
  WifiIcon,
  TvIcon,
  TrophyIcon,
  SunIcon,
  CardIcon,
  FileIcon,
  KudaMarkIcon,
  HashIcon,
  PosIcon,
  GiftIcon,
  BusIcon,
  BookIcon,
  BoltIcon,
} from '@/components/icons/Icons';
import { GridActionItem } from '@/types';

export const essentialsData: GridActionItem[] = [
  { id: 'airtime', label: 'Airtime', Icon: PhoneIcon },
  { id: 'internet', label: 'Internet', Icon: WifiIcon, badge: 'HOT' },
  { id: 'tv', label: 'TV', Icon: TvIcon },
  { id: 'electricity', label: 'Electricity', Icon: BoltIcon },
  { id: 'solar', label: 'Solar', Icon: SunIcon },
  { id: 'cards', label: 'Cards', Icon: CardIcon },
  { id: 'esim', label: 'eSIM', Icon: FileIcon },
];

export const cardlessPaymentsData: GridActionItem[] = [
  { id: 'payid', label: 'Pay ID', Icon: KudaMarkIcon },
  { id: 'ussd', label: 'USSD', Icon: HashIcon },
  { id: 'pos', label: 'POS', Icon: PosIcon },
];

export const lifestyleData: GridActionItem[] = [
  { id: 'betting', label: 'Betting', Icon: TrophyIcon, badge: 'HOT' },
  { id: 'giftcards', label: 'Gift Cards', Icon: GiftIcon },
  { id: 'transport', label: 'Transport', Icon: BusIcon },
  { id: 'education', label: 'Education', Icon: BookIcon },
];
