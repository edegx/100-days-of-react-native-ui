import { StarIcon, TicketIcon } from "@/components/icons/Icons";
import { SpendEarnItemData } from "@/types";

export const spendAndEarnData: SpendEarnItemData[] = [
  {
    id: "cashback",
    title: "Cashback",
    subtitle: "Earn as you pay",
    Icon: TicketIcon,
  },
  { id: "offers", title: "Offers", subtitle: "Updated weekly", Icon: StarIcon },
];
