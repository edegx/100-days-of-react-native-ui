import React from 'react';
import { FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import SectionHeader from '@/components/common/SectionHeader';
import ProductCard from './ProductCard';
import { ProductSectionData } from '@/types';
import { spacing } from '@/constants/spacing';

export default function ProductSection({ section }: { section: ProductSectionData }) {
  const router = useRouter();

  return (
    <>
      <SectionHeader
        title={section.title}
        emoji={section.emoji}
        subtitle={section.subtitle}
        showArrowButton
        onArrowPress={() => {}}
      />
      <FlatList
        data={section.items}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: spacing.lg, gap: spacing.md }}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => router.push('/get-it')} />
        )}
      />
    </>
  );
}
