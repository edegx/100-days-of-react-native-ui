import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { promoCards } from '@/data/promos';
import { spacing } from '@/constants/spacing';
import PromoCard from './PromoCard';

export default function PromoCarousel() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {promoCards.map((card) => (
        <PromoCard key={card.id} card={card} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    paddingBottom: spacing.lg,
  },
});
