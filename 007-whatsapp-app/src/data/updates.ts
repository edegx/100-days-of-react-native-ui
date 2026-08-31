import { UpdateItem } from '@/types';

export const myStatus = {
  name: 'My status',
  subtitle: 'Disappears after 24 hours',
  avatar: { initials: 'ME', color: '#3D3D40' },
};

export const updates: UpdateItem[] = [
  {
    id: '1',
    name: 'Zara Mills 🙌🙌',
    avatar: { initials: 'ZM', color: '#F2994A' },
    time: '4h ago',
    ringStyle: 'solid',
  },
  {
    id: '2',
    name: 'Winston',
    avatar: { initials: 'W', color: '#2F80ED' },
    time: '6h ago',
    ringStyle: 'partial',
  },
  {
    id: '3',
    name: 'Samuel C.',
    avatar: { initials: 'SC', color: '#27AE60' },
    time: '30m ago',
    ringStyle: 'solid',
  },
  {
    id: '4',
    name: 'Solomon',
    avatar: { initials: 'S', color: '#9B51E0' },
    time: '53m ago',
    ringStyle: 'dashed',
  },
  {
    id: '5',
    name: 'Custard 🩸',
    avatar: { initials: 'C', color: '#EB5757' },
    time: '18m ago',
    ringStyle: 'solid',
  },
  {
    id: '6',
    name: 'Precious',
    avatar: { initials: 'P', color: '#56CCF2' },
    time: '2h ago',
    ringStyle: 'dashed',
  },
  {
    id: '7',
    name: 'Misturah',
    avatar: { initials: 'M', color: '#BB6BD9' },
    time: 'Just now',
    ringStyle: 'dashed',
  },
];
