import React from 'react';
import { FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import SectionHeader from '@/components/common/SectionHeader';
import OpportunityCard from './OpportunityCard';
import { vettedOpportunities } from '@/data/investments';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export default function VettedOpportunitiesSection() {
  const router = useRouter();

  return (
    <>
      <SectionHeader
        title="Vetted Opportunities"
        linkLabel="Find More"
        linkColor={colors.purpleLight}
        onLinkPress={() => router.push('/invest')}
      />
      <FlatList
        data={vettedOpportunities}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: spacing.lg, gap: spacing.md }}
        renderItem={({ item }) => (
          <OpportunityCard item={item} onPress={() => router.push('/invest')} />
        )}
      />
    </>
  );
}
