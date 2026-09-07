import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Screen from '@/components/common/Screen';
import Header from '@/components/home/Header';
import PromoCarousel from '@/components/home/PromoCarousel';
import WealthCard from '@/components/home/WealthCard';
import ReferralsCard from '@/components/home/ReferralsCard';
import ActionBanner from '@/components/home/ActionBanner';
import PortfolioSection from '@/components/home/PortfolioSection';
import CashSection from '@/components/home/CashSection';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import { spacing } from '@/constants/spacing';

export default function HomeScreen() {
  return (
    <Screen>
      <Header name="Ezekiel E." />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <PromoCarousel />
        <WealthCard />
        <ReferralsCard />
        <ActionBanner />
        <PortfolioSection />
        <CashSection />
      </ScrollView>
      <BottomNavigation />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxxl,
    gap: spacing.lg,
  },
});
