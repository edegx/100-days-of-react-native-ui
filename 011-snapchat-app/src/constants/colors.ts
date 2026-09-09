export const colors = {
  background: "#121212",
  bottomNavigation: "#1e1e1e",
  surface: "#0d0d0d",
  surfaceElevated: "#1a1a1a",
  border: "#242424",
  yellow: "#FFFC00",
  purpleRing: "#B24BF3",
  purpleText: "#C77DFF",
  pinkAccent: "#FF5CA9",
  textPrimary: "#FFFFFF",
  textSecondary: "#8E8E93",
  textTertiary: "#6B6B6B",
  badgeRed: "#FF3B30",
  blueDelivered: "#26C6F9",
  overlayDark: "rgba(0,0,0,0.55)",
} as const;

export type AppColors = typeof colors;
