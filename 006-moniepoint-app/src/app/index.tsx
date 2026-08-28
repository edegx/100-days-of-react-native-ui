import Screen from "@/components/common/Screen";
import TitledSection from "@/components/common/TitledSection";
import BalanceCard from "@/components/home/BalanceCard";
import Header from "@/components/home/Header";
import InfoCard from "@/components/home/InfoCard";
import PromoSection from "@/components/home/PromoSection";
import RewardsSection from "@/components/home/RewardsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import SpendingTrends from "@/components/home/SpendingTrends";
import TransactionsSection from "@/components/home/TransactionsSection";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import { spacing } from "@/constants/spacing";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <Screen>
      <Header level="Level 5" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* <KycBanner /> */}

        {/* <PaginationDots count={2} activeIndex={0} /> */}

        <BalanceCard
          accountNumber="0123456789"
          accountName="Byteverse Technology"
          balance="₦10,131,413.22"
          lastUpdated="Last updated 8 hours ago"
          isBalanceVisible={isBalanceVisible}
          onToggleVisibility={() => setIsBalanceVisible((prev) => !prev)}
        />

        <ServicesGrid />

        <RewardsSection isAmountVisible={isBalanceVisible} />

        <TransactionsSection isAmountVisible={isBalanceVisible} />

        <PromoSection
          sectionTitle="Do more with Moniepoint"
          heading="Register your business with CAC"
          description="We made it easy — we'll process your CAC registration for you."
          ctaLabel="Get registered"
        />

        <TitledSection title="Finances">
          <InfoCard
            emoji="🎯"
            iconBackground="#013251"
            title="Savings"
            descriptionPrefix="Create a savings plan and get "
            highlightedText="up to 20.0% interest per annum"
          />
        </TitledSection>

        <TitledSection title="Marketers toolkit">
          <InfoCard
            emoji="💳"
            iconBackground="#224683"
            title="Become a card sales agent"
            boldText="Earn sales commissions for every card sold"
          />
        </TitledSection>

        <SpendingTrends />
      </ScrollView>

      <BottomNavigation />
    </Screen>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxxl,
  },
});
