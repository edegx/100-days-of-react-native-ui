import { colors } from "@/constants/colors";
import { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "airtime",
    label: "Airtime",
    icon: { family: "ionicons", name: "call" },
    iconBackground: colors.blue,
  },
  {
    id: "data",
    label: "Data",
    icon: { family: "material-community", name: "swap-vertical-bold" },
    iconBackground: colors.teal,
  },
  {
    id: "betting",
    label: "Betting",
    icon: { family: "ionicons", name: "football" },
    iconBackground: colors.teal,
  },
  {
    id: "electricity",
    label: "Electricity",
    icon: { family: "ionicons", name: "flash" },
    iconBackground: colors.teal,
  },
  {
    id: "refer-earn",
    label: "Refer & Earn",
    icon: { family: "material-community", name: "sack" },
    iconBackground: colors.purple,
  },
  {
    id: "insurance",
    label: "Insurance",
    icon: { family: "material-community", name: "shield-refresh" },
    iconBackground: "#4790fe",
    badge: "FREE",
  },
  {
    id: "loan",
    label: "Loan",
    icon: { family: "material-community", name: "leaf" },
    iconBackground: "#19b8ea",
  },
  {
    id: "more",
    label: "More",
    icon: { family: "material-community", name: "view-dashboard" },
    iconBackground: colors.purple,
  },
];

export default services;
