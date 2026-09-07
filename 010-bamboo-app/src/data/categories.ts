import { SearchCategory } from '@/types';
import { colors } from '@/constants/colors';

export const searchCategories: SearchCategory[] = [
  {
    id: 'agri',
    title: 'Agricultural Giants',
    backgroundColor: colors.blue,
    textColor: '#FFFFFF',
    emoji: '🥕',
  },
  {
    id: 'dividend',
    title: 'Dividend Aristocrats',
    backgroundColor: '#C9BEEE',
    textColor: '#1A1A1A',
    emoji: '🤝',
  },
  {
    id: 'insurance',
    title: 'Insurance Rewards',
    backgroundColor: '#F3D3C9',
    textColor: '#1A1A1A',
    emoji: '📋',
  },
];
