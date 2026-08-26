export interface TransferActionData {
  id: string;
  title: string;
  iconName: string;
}

export const transferActions: TransferActionData[] = [
  { id: "to-opay", title: "To OPay", iconName: "account-arrow-right-outline" },
  { id: "to-bank", title: "To Bank", iconName: "bank-outline" },
  { id: "withdraw", title: "Withdraw", iconName: "arrow-expand" },
];
