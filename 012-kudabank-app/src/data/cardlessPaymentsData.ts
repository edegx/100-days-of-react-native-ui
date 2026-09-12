import {
    HashIcon,
    KudaMarkIcon,
    PosIcon
} from "@/components/icons/Icons";
import { GridActionItem } from "@/types";

export const cardlessPaymentsData: GridActionItem[] = [
  { id: "payid", label: "Pay ID", Icon: KudaMarkIcon },
  { id: "ussd", label: "USSD", Icon: HashIcon },
  { id: "pos", label: "POS", Icon: PosIcon },
];
