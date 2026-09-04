import React from 'react';
import { FlatList } from 'react-native';
import SectionHeader from '@/components/common/SectionHeader';
import MediaCard from './MediaCard';
import { mediaItems } from '@/data/homeContent';
import { spacing } from '@/constants/spacing';

export default function MediaContentSection() {
  return (
    <>
      <SectionHeader title="Media & Content" />
      <FlatList
        data={mediaItems}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: spacing.lg, gap: spacing.md }}
        renderItem={({ item }) => <MediaCard item={item} />}
      />
    </>
  );
}
