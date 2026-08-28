import { colors } from './colors';

export const typography = {
  h1: {
    fontSize: 34,
    fontWeight: '800' as const,
    color: colors.textPrimary,
  },
  h2: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  body: {
    fontSize: 15,
    fontWeight: '400' as const,
    color: colors.textPrimary,
  },
  bodyBold: {
    fontSize: 15,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  caption: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.textSecondary,
  },
  label: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
};
