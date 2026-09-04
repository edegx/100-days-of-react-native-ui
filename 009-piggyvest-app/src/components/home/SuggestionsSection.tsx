import React from 'react';
import { FlatList } from 'react-native';
import SectionHeader from '@/components/common/SectionHeader';
import SuggestionCard from './SuggestionCard';
import { suggestions } from '@/data/homeContent';
import { spacing } from '@/constants/spacing';

export default function SuggestionsSection() {
  return (
    <>
      <SectionHeader title="Suggestions For You" />
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: spacing.lg, gap: spacing.md }}
        renderItem={({ item }) => <SuggestionCard item={item} />}
      />
    </>
  );
}
