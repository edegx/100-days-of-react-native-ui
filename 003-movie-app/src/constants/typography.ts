import { colors } from "./colors";

export const typography = {
  greeting: {
    fontSize: 15,
    fontWeight: "400" as const,
    color: colors.textSecondary,
  },
  userName: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: colors.text,
  },
  viewAll: {
    fontSize: 13,
    fontWeight: "500" as const,
    color: colors.textSecondary,
  },
  tabActive: {
    fontSize: 14,
    fontWeight: "900" as const,
    color: colors.text,
  },
  tabInactive: {
    fontSize: 14,
    fontWeight: "700" as const,
    color: colors.textMuted,
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: "500" as const,
    color: colors.text,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: "700" as const,
    color: colors.text,
  },
  metaText: {
    fontSize: 13,
    fontWeight: "400" as const,
    color: colors.textSecondary,
  },
  body: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "400" as const,
    color: colors.textSecondary,
  },
};
