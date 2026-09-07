import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Screen from '@/components/common/Screen';
import LearnTabs from '@/components/learn/LearnTabs';
import LearnIntro from '@/components/learn/LearnIntro';
import LearnList from '@/components/learn/LearnList';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import { learnTabs } from '@/data/learnContent';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export default function LearnScreen() {
  const [activeTabId, setActiveTabId] = useState(learnTabs[0].id);
  const activeTab = learnTabs.find((tab) => tab.id === activeTabId) ?? learnTabs[0];

  return (
    <Screen>
      <Text style={styles.title}>Learn</Text>
      <LearnTabs activeTabId={activeTabId} onSelectTab={setActiveTabId} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <LearnIntro />
        <LearnList items={activeTab.items} />
      </ScrollView>
      <BottomNavigation />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
    paddingVertical: spacing.lg,
  },
  content: {
    paddingBottom: spacing.xxxl,
  },
});
