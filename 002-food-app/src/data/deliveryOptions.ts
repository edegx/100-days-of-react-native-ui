import { DeliveryOption } from '@/types';

export const deliveryOptions: DeliveryOption[] = [
  {
    id: 'priority',
    label: 'Priority',
    timeRange: '20 - 30 min',
    note: 'Delivered directly to you  +$2.99',
  },
  {
    id: 'standard',
    label: 'Standard',
    timeRange: '',
    note: 'There is no charge',
  },
];
