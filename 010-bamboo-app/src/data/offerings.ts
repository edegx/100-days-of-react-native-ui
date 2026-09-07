import { AssetOffering } from "@/types";

export const usdAssetOfferings: AssetOffering[] = [
  {
    id: "us-stocks",
    title: "US Stocks",
    description: "Buy U.S companies.",
    emoji: "🧊",
  },
  {
    id: "treasury-bills",
    title: "Treasury Bills",
    description: "Buy government bills.",
    emoji: "📜",
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    description: "Grow your money steadily.",
    emoji: "🪙",
  },
  {
    id: "dollar-bonds",
    title: "Dollar Bonds",
    description: "Earn fixed USD returns.",
    emoji: "📁",
    isNew: true,
  },
];

export const ngnAssetOfferings: AssetOffering[] = [
  {
    id: "ng-stocks",
    title: "NG Stocks",
    description: "Buy local companies.",
    emoji: "🧊",
  },
  {
    id: "treasury-bills",
    title: "Treasury Bills",
    description: "Buy government bills.",
    emoji: "📜",
  },
  {
    id: "naira-savings",
    title: "Naira Savings",
    description: "Earn up to 16.25% per annum.",
    emoji: "🔒",
    isNew: true,
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    description: "Grow your money steadily.",
    emoji: "🪙",
  },
];
