import { TextStyle } from 'react-native';

export const typography = {
  balance: {
    fontSize: 34,
    fontWeight: '700',
    color: '#F7F6F4',
  } as TextStyle,
  screenTitle: {
    fontSize: 20,
    fontWeight: '700',
  } as TextStyle,
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  } as TextStyle,
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
  } as TextStyle,
  body: {
    fontSize: 15,
    fontWeight: '400',
  } as TextStyle,
  caption: {
    fontSize: 13,
    fontWeight: '400',
  } as TextStyle,
  label: {
    fontSize: 14,
    fontWeight: '500',
  } as TextStyle,
} as const;
