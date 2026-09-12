import { colors } from "@/constants/colors";
import { Banner } from "@/types";
export const banners: Banner[] = [
  {
    id: "kyc",
    icon: "info",
    title: "Your KYC is incomplete",
    body: "To maintain your account limits, please complete your KYC here.",
    backgroundColor: colors.yellowBanner,
    textColor: colors.yellowBannerText,
  },
  {
    id: "limit",
    icon: "rocket",
    title: "Upgrade To Tier 2",
    body: "Please add your NIN details to increase your transaction limit",
    backgroundColor: colors.greenBanner,
    textColor: colors.yellowBannerText,
  },
];
