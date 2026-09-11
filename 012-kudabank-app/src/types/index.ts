import { IconProps } from "@/components/icons/Icons";
import { ComponentType } from "react";

export interface GridActionItem {
  id: string;
  label: string;
  Icon: ComponentType<IconProps>;
  badge?: "HOT" | "NEW";
  route?: string;
}

export interface TransactionItemData {
  id: string;
  name: string;
  date: string;
  amount: number;
  direction: "credit" | "debit";
  avatar: string;
}

export interface Banner {
  id: string;
  icon: string;
  title: string;
  body: string;
  backgroundColor: string;
  textColor: string;
}

export interface ProductRowData {
  id: string;
  title: string;
  ctaLabel: string;
  Icon: ComponentType<IconProps>;
}

export interface SpendEarnItemData {
  id: string;
  title: string;
  subtitle: string;
  Icon: ComponentType<IconProps>;
}

export type BottomTabKey = "home" | "pay" | "send" | "save" | "borrow";
