import { Transaction } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import SectionHeader from "../common/SectionHeader";
import ActivityItem from "./ActivityItem";

const transactions: Transaction[] = [
  {
    id: "1",
    direction: "sent",
    counterpartyAddress: "0x8A72c...91Fd",
    timeAgo: "5 min ago.",
    amountUsd: "$124.50",
    amountCrypto: "≈124.5 usdt",
  },
  {
    id: "2",
    direction: "received",
    counterpartyAddress: "0xF392a...7Bc1",
    timeAgo: "18 min ago.",
    amountUsd: "$763.17",
    amountCrypto: "≈763.17 usdt",
  },
  {
    id: "3",
    direction: "received",
    counterpartyAddress: "0x34534...232",
    timeAgo: "32 min ago.",
    amountUsd: "$58.42",
    amountCrypto: "≈58.42 usdt",
  },

  {
    id: "4",
    direction: "sent",
    counterpartyAddress: "0xB821f...4A92",
    timeAgo: "1 hour ago.",
    amountUsd: "$299.00",
    amountCrypto: "≈299 usdt",
  },
  {
    id: "5",
    direction: "received",
    counterpartyAddress: "0x72D91...8Ef3",
    timeAgo: "2 hours ago.",
    amountUsd: "$1,250.75",
    amountCrypto: "≈1,250.75 usdt",
  },
  {
    id: "6",
    direction: "sent",
    counterpartyAddress: "0xC483b...19Da",
    timeAgo: "4 hours ago.",
    amountUsd: "$42.80",
    amountCrypto: "≈42.8 usdt",
  },
  {
    id: "7",
    direction: "received",
    counterpartyAddress: "0xA912e...63Fb",
    timeAgo: "Yesterday.",
    amountUsd: "$906.35",
    amountCrypto: "≈906.35 usdt",
  },
];

export default function ActivitySection() {
  return (
    <View style={styles.container}>
      <SectionHeader title="Activity" actionLabel="See all" />
      {transactions.map((transaction) => (
        <ActivityItem key={transaction.id} transaction={transaction} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
});
