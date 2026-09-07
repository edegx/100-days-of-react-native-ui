import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Screen from '@/components/common/Screen';
import SearchScreenHeader from '@/components/search/SearchScreenHeader';
import SearchInput from '@/components/search/SearchInput';
import CategoryCarousel from '@/components/search/CategoryCarousel';
import CollapsibleSectionHeader from '@/components/search/CollapsibleSectionHeader';
import StockFilterChips from '@/components/search/StockFilterChips';
import StockList from '@/components/search/StockList';
import { stocks } from '@/data/stocks';
import { StockFilterOption } from '@/types';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export default function SearchStocksScreen() {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(true);
  const [filter, setFilter] = useState<StockFilterOption>('all');

  const filteredStocks = useMemo(() => {
    if (filter === 'etfs') return [];
    return stocks.filter((stock) =>
      stock.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, filter]);

  return (
    <Screen>
      <SearchScreenHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <SearchInput value={query} onChangeText={setQuery} />
        <CategoryCarousel />

        <CollapsibleSectionHeader
          title="Primary offers & IPOs"
          expanded={expanded}
          onToggle={() => setExpanded((prev) => !prev)}
        />

        {expanded && (
          <>
            <Text style={styles.sectionTitle}>Stocks & ETFs</Text>
            <StockFilterChips selected={filter} onSelect={setFilter} />
            <StockList stocks={filteredStocks} />
          </>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxxl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
});
