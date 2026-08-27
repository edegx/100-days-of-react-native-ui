import { QuickAction } from "@/types";

export const quickActions: QuickAction[] = [
  {
    id: "to-bank",
    label: "To Bank",
    icon: { family: "material-community", name: "bank" },
    badge: "0 Fee",
  },
  {
    id: "to-palmpay",
    label: "To PalmPay",
    icon: { family: "material-community", name: "contacts" },
  },
  {
    id: "savings",
    label: "Savings",
    icon: { family: "material-community", name: "piggy-bank" },
  },
  {
    id: "cards",
    label: "Cards",
    icon: { family: "ionicons", name: "card" },
  },
];

export default quickActions;
