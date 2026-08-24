import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import DeliveryOptionCard from '@/components/checkout/DeliveryOptionCard';
import { spacing } from '@/constants/spacing';
import { deliveryOptions } from '@/data/deliveryOptions';

export default function DeliveryOptionsRow() {
  const [selectedId, setSelectedId] = useState(deliveryOptions[0].id);

  return (
    <View style={styles.container}>
      {deliveryOptions.map((option) => (
        <DeliveryOptionCard
          key={option.id}
          option={option}
          isSelected={option.id === selectedId}
          onPress={() => setSelectedId(option.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
});
