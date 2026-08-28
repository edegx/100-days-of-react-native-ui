import { colors } from "@/constants/colors";
import type { RewardData } from "@/types";

export const rewards: RewardData[] = [
  {
    id: "cashback",
    label: "Cashback",
    amount: "₦3,039.50",
    emoji: "🪙",
    tileColor: colors.cashbackTileBg,
  },
  {
    id: "referrals",
    label: "Referrals",
    amount: "₦0.00",
    emoji: "📣",
    tileColor: colors.referralsTileBg,
  },
];
