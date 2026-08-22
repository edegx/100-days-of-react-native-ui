import { ScrollView } from "react-native";

import Screen from "@/components/common/Screen";
import ActionButtonsRow from "@/components/home/ActionButtonsRow";
import ActivitySection from "@/components/home/ActivitySection";
import BalanceCard from "@/components/home/BalanceCard";
import Header from "@/components/home/Header";
import InvitePromo from "@/components/home/InvitePromo";

export default function Index() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Header greeting="Good Morning" name="Edegx!" />
        <BalanceCard
          totalBalance="$8,938.43"
          changeAmount="$1,323.43"
          changePercent="16%"
          walletAddress="0x8A72...3Fad"
          walletName="Main Wallet"
        />
        <ActionButtonsRow />
        <InvitePromo title="Invite a freind and get $10 in USDT" />
        <ActivitySection />
      </ScrollView>
    </Screen>
  );
}
