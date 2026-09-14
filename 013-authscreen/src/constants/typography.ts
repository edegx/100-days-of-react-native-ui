import { TextStyle } from 'react-native';
import { colors } from './colors';

export const typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.textHeading,
  },
  h2: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textHeading,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textMuted,
  },
  bodyStrong: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  button: {
    fontSize: 15,
    fontWeight: '700',
  },
  caption: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.textMuted,
  },
};
