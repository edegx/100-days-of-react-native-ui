export interface QuickActionData {
  id: string;
  title: string;
  iconName: string;
  badgeText?: string;
  badgeColor?: string;
}

export const quickActions: QuickActionData[] = [
  {
    id: "airtime",
    title: "Airtime",
    iconName: "cellphone",
    badgeText: "Up to 6%",
  },
  {
    id: "data",
    title: "Data",
    iconName: "swap-vertical-bold",
  },
  {
    id: "betting",
    title: "Betting",
    iconName: "soccer",
  },
  {
    id: "tv",
    title: "TV",
    iconName: "television-play",
  },
  {
    id: "safebox",
    title: "SafeBox",
    iconName: "wallet-outline",
  },
  {
    id: "loan",
    title: "Loan",
    iconName: "hand-coin-outline",
  },
  {
    id: "invitation",
    title: "Invitation",
    iconName: "bullhorn-outline",
    badgeText: "₦6,300",
  },
  {
    id: "more",
    title: "More",
    iconName: "dots-grid",
  },
];
