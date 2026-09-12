import {
  BarChartIcon,
  PercentIcon
} from "@/components/icons/Icons";
import { ProductRowData } from "@/types";

export const productsData: ProductRowData[] = [
  { id: "savings", title: "Savings", ctaLabel: "Set up", Icon: PercentIcon },
  {
    id: "investments",
    title: "Investments",
    ctaLabel: "Start",
    Icon: BarChartIcon,
  },
];
