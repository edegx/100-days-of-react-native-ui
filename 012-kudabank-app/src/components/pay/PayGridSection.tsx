import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PayGridItem from '@/components/pay/PayGridItem';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { GridActionItem } from '@/types';

interface PayGridSectionProps {
  title: string;
  data: GridActionItem[];
}

const PayGridSection: React.FC<PayGridSectionProps> = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.grid}>
        {data.map((item) => (
          <PayGridItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: spacing.md,
    columnGap: spacing.md,
  },
});

export default PayGridSection;
