import BalanceCard from "@/components/common/BalanceCard";
import Screen from "@/components/common/Screen";
import TabHeader from "@/components/common/TabHeader";
import InvestEmptyState from "@/components/invest/InvestEmptyState";
import InvestTabs from "@/components/invest/InvestTabs";
import VettedOpportunitiesSection from "@/components/invest/VettedOpportunitiesSection";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { InvestTabKey } from "@/types";
import { useState } from "react";
import { ScrollView, View } from "react-native";

const EMPTY_COPY: Record<InvestTabKey, { title: string; description: string }> =
  {
    active: {
      title: "No Active Investments",
      description:
        "You have NO active investments🤭",
    },
    matured: {
      title: "No Matured Investments",
      description:
        "You have no mature investments",
    },
  };

export default function InvestScreen() {
  const [activeTab, setActiveTab] = useState<InvestTabKey>("active");

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <TabHeader
          iconName="users"
          iconColor={colors.purpleLight}
          title="My Investments"
          subtitle="Invest money & get returns."
        />

        <View style={{ marginBottom: spacing.xxl }}>
          <BalanceCard
            backgroundColor={colors.purple}
            label="Total Investment"
            value="₦60,741,017.00"
            rightPillLabel="Up to 35% returns"
            rightPillColor={colors.white}
            rightPillTextColor="#171313"
            backgroundImageUri="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/Investify_Card_2dd800c22b/Investify_Card_2dd800c22b.png"
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: spacing.lg,
          }}
        />

        <VettedOpportunitiesSection />

        <InvestTabs activeTab={activeTab} onChange={setActiveTab} />
        <InvestEmptyState {...EMPTY_COPY[activeTab]} />
      </ScrollView>
    </Screen>
  );
}
