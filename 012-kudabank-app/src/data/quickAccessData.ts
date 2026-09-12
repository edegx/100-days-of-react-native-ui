import { GridActionItem } from "@/types";
import {
  BarChartIcon,
  PercentIcon,
  PhoneIcon,
  StarIcon,
  TicketIcon,
  TransferIcon,
  TrophyIcon,
  WifiIcon,
} from "@/components/icons/Icons";
export const quickAccessData: GridActionItem[] = [
  { id: "transfer", label: "Transfer", Icon: TransferIcon, route: "/pay" },
  { id: "airtime", label: "Airtime", Icon: PhoneIcon, route: "/pay" },
  { id: "internet", label: "Internet", Icon: WifiIcon, route: "/pay" },
  { id: "betting", label: "Betting", Icon: TrophyIcon, route: "/pay" },
];