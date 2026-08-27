import React from 'react';
import { StyleSheet, View } from 'react-native';
import PromoCardTile from '@/components/home/PromoCardTile';
import { promoCards } from '@/data/promoCards';
import { spacing } from '@/constants/spacing';

interface PromoCardsRowProps {
  onPressCard?: (id: string) => void;
}

export default function PromoCardsRow({ onPressCard }: PromoCardsRowProps) {
  return (
    <View style={styles.row}>
      {promoCards.map((card) => (
        <PromoCardTile key={card.id} card={card} onPress={() => onPressCard?.(card.id)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
});
