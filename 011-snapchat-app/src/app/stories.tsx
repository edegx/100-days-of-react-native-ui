import React from 'react';
import { ScrollView } from 'react-native';
import Screen from '@/components/common/Screen';
import AppHeader from '@/components/common/AppHeader';
import FriendsStoriesRow from '@/components/stories/FriendsStoriesRow';
import DiscoverGrid from '@/components/stories/DiscoverGrid';
import FeaturedStoriesGrid from '@/components/stories/FeaturedStoriesGrid';
import BottomNavigation from '@/components/navigation/BottomNavigation';

export default function StoriesScreen() {
  return (
    <Screen>
      <AppHeader title="Stories" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <FriendsStoriesRow />
        <DiscoverGrid />
        <FeaturedStoriesGrid />
      </ScrollView>
      <BottomNavigation activeTab="stories" />
    </Screen>
  );
}
