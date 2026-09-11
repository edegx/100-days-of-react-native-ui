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
];
