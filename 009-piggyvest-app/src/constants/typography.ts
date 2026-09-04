import { TextStyle } from "react-native";
import { colors } from "./colors";

export const typography = {
  greeting: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
  } as TextStyle,
  subGreeting: {
    fontSize: 16,
    fontWeight: "500",
    color: "#A6A5AD",
  } as TextStyle,
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textSecondary,
  } as TextStyle,
  sectionLink: {
    fontSize: 15,
    fontWeight: "600",
  } as TextStyle,
  balanceLabel: {
    fontSize: 15,
    fontWeight: "400",
  } as TextStyle,
  balanceValue: {
    fontSize: 34,
    fontWeight: "800",
    color: "#FFFFFF",
  } as TextStyle,
  cardTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#FFFFFF",
  } as TextStyle,
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#B9B8C0",
  } as TextStyle,
  pillLabel: {
    fontSize: 14,
    fontWeight: "700",
  } as TextStyle,
  navLabel: {
    fontSize: 12,
    fontWeight: "500",
  } as TextStyle,
};
