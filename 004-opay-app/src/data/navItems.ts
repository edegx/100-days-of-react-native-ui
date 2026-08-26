export interface NavItemData {
  id: string;
  label: string;
  route: string;
  iconName: string;
}

export const navItems: NavItemData[] = [
  { id: "home", label: "Home", route: "/", iconName: "sync-circle" },
  {
    id: "rewards",
    label: "Rewards",
    route: "/rewards",
    iconName: "shield-outline",
  },
  {
    id: "finance",
    label: "Finance",
    route: "/finance",
    iconName: "chart-line",
  },
  {
    id: "cards",
    label: "Cards",
    route: "/cards",
    iconName: "credit-card-outline",
  },
  { id: "me", label: "Me", route: "/me", iconName: "account-circle-outline" },
];
