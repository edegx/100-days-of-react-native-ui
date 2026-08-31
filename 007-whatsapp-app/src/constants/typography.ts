import { TextStyle } from 'react-native';

export const typography: Record<string, TextStyle> = {
  largeTitle: {
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  headline: {
    fontSize: 17,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
  bodyMedium: {
    fontSize: 16,
    fontWeight: '500',
  },
  subhead: {
    fontSize: 15,
    fontWeight: '400',
  },
  caption: {
    fontSize: 13,
    fontWeight: '400',
  },
  footnote: {
    fontSize: 12,
    fontWeight: '400',
  },
};
