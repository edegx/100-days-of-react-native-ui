import { colors } from "@/constants/colors";
import { PromoCard } from "@/types";

export const promoCards: PromoCard[] = [
  {
    id: "houseview",
    title: "H2 HouseView\nTop Picks",
    backgroundColor: colors.yellow,
    textColor: "#1A1A1A",
    iconType: "image",
  },
  {
    id: "ngx-trades",
    title: "Tired Of Failed\nNGX Trades?\nHere's The Fix",
    backgroundColor: colors.blue,
    textColor: "#FFFFFF",
    iconType: "image",
  },
  {
    id: "ipos",
    title: "Learn How IPOs\nActually Work",
    backgroundColor: colors.yellowSoft,
    textColor: "#1A1A1A",
    iconType: "emoji",
    emoji: "🍰",
  },
];
