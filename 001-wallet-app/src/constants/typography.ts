import { colors } from './colors';

export const typography = {
  greeting: {
    fontSize: 22,
    fontWeight: '400' as const,
    color: colors.mediumGray,
  },
  greetingName: {
    fontSize: 26,
    fontWeight: '700' as const,
    color: colors.black,
  },
  label: {
    fontSize: 15,
    fontWeight: '400' as const,
    color: colors.mediumGray,
  },
  balance: {
    fontSize: 40,
    fontWeight: '700' as const,
    color: colors.black,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.black,
  },
  seeAll: {
    fontSize: 15,
    fontWeight: '500' as const,
    color: colors.mediumGray,
  },
};
