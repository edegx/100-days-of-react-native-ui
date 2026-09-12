import {
    BookIcon,
    BusIcon,
    GiftIcon,
    TrophyIcon
} from "@/components/icons/Icons";
import { GridActionItem } from "@/types";

export const lifestyleData: GridActionItem[] = [
  { id: "betting", label: "Betting", Icon: TrophyIcon, badge: "HOT" },
  { id: "giftcards", label: "Gift Cards", Icon: GiftIcon },
  { id: "transport", label: "Transport", Icon: BusIcon },
  { id: "education", label: "Education", Icon: BookIcon },
];
