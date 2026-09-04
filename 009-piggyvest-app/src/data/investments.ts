import { colors } from "@/constants/colors";
import { VettedOpportunity } from "@/types";

export const vettedOpportunities: VettedOpportunity[] = [
  {
    id: "sovereign-debt",
    imageUri:
      "https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/inv_1788277449823_4D360E67.jpg",
    gradientColors: ["#1C7BE0", "#3E9CFF"],
    borderColor: colors.greenLight,
    badgeLabel: "₦5K • INVEST NOW",
    badgeColor: colors.green,
    rate: "19%",
    rateLabel: "gross p.a.",
    investors: "513",
    title: "SOVEREIGN DEBT NOTE",
    returnsLabel: "5.9% • returns in 4 months",
  },
  {
    id: "corporate-debt",
    imageUri:
      "https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/inv_1787846249643_CD539A73.jpg",
    gradientColors: ["#9C3FE0", "#C64FE8"],
    borderColor: colors.pink,
    badgeLabel: "₦5K • SOLD OUT",
    badgeColor: colors.red,
    rate: "19.33%",
    rateLabel: "gross p.a",
    investors: "1,112",
    title: "CORPORATE DEBT NOTE",
    returnsLabel: "12.7% • returns in 8 months",
  },
  {
    id: "johnvest",
    imageUri:
      "https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/inv_1785410713998_B9C02914.jpg",
    gradientColors: ["#12203E", "#1B2E5C"],
    borderColor: colors.navyBorder,
    badgeLabel: "₦5K • INVEST NOW",
    badgeColor: colors.green,
    rate: "24.4%",
    rateLabel: "gross p.a.",
    investors: "842",
    title: "JOHNVEST NOTE",
    returnsLabel: "24.4% • returns in 12 months",
  },
  {
    id: "4",
    imageUri:
      "https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/inv_1785413590047_415A8FD3.jpg",
    gradientColors: ["#b32d58", "#b32d58"],
    borderColor: colors.navyBorder,
    badgeLabel: "₦5K • SOLD OUT",
    badgeColor: colors.green,
    rate: "16.8%",
    rateLabel: "gross p.a.",
    investors: "1,077",
    title: "Sunny Owo Series 1 Commer",
    returnsLabel: "16.8% • returns in 9 months",
  },
];
