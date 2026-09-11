import Screen from "@/components/common/Screen";
import AccountCard from "@/components/home/AccountCard";
import Banner from "@/components/home/Banner";
import CardsPromoSection from "@/components/home/CardsPromoSection";
import Header from "@/components/home/Header";
import LatestSection from "@/components/home/LatestSection";
import ProductsSection from "@/components/home/ProductsSection";
import QuickAccessSection from "@/components/home/QuickAccessSection";
import SpendAndEarnSection from "@/components/home/SpendAndEarnSection";
import TransactionsSection from "@/components/home/TransactionsSection";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  const [balanceVisible, setBalanceVisible] = useState(false);

  return (
    <Screen>
      <Header />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AccountCard
          currencyLabel="Nigerian Naira"
          accountNumber="1101129207"
          balance={583933.89}
          lastUpdatedLabel={
            balanceVisible
              ? "Last updated 1 min ago"
              : "Last updated 15 sec ago"
          }
          visible={balanceVisible}
          onToggleVisible={() => setBalanceVisible((v) => !v)}
        />
        <QuickAccessSection />
        <Banner />

        <TransactionsSection showAmounts={balanceVisible} />
        <ProductsSection />
        <CardsPromoSection />
        <SpendAndEarnSection />
        <LatestSection />
      </ScrollView>
      <BottomNavigation />
    </Screen>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 120,
  },
});
