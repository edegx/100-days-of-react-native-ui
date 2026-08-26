import React from 'react';
import { FlatList } from 'react-native';
import SectionHeader from '@/components/common/SectionHeader';
import ContinueWatchingCard from '@/components/home/ContinueWatchingCard';
import { spacing } from '@/constants/spacing';
import { Movie } from '@/types';

interface ContinueWatchingSectionProps {
  movies: Movie[];
}

export default function ContinueWatchingSection({ movies }: ContinueWatchingSectionProps) {
  return (
    <>
      <SectionHeader title="Continue Watching" />
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: spacing.lg, gap: spacing.md }}
        renderItem={({ item }) => <ContinueWatchingCard movie={item} />}
      />
    </>
  );
}
