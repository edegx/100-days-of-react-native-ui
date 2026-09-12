import {
  BoltIcon,
  CardIcon,
  FileIcon,
  PhoneIcon,
  SunIcon,
  TvIcon,
  WifiIcon
} from "@/components/icons/Icons";
import { GridActionItem } from "@/types";

export const essentialsData: GridActionItem[] = [
  { id: "airtime", label: "Airtime", Icon: PhoneIcon },
  { id: "internet", label: "Internet", Icon: WifiIcon, badge: "HOT" },
  { id: "tv", label: "TV", Icon: TvIcon },
  { id: "electricity", label: "Electricity", Icon: BoltIcon },
  { id: "solar", label: "Solar", Icon: SunIcon },
  { id: "cards", label: "Cards", Icon: CardIcon },
  { id: "esim", label: "eSIM", Icon: FileIcon },
];
