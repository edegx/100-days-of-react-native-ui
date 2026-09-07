import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { learnTabs } from '@/data/learnContent';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

interface LearnTabsProps {
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
}

export default function LearnTabs({ activeTabId, onSelectTab }: LearnTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {learnTabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <Pressable key={tab.id} onPress={() => onSelectTab(tab.id)} style={styles.tab}>
            <Text style={[styles.label, isActive ? styles.labelActive : styles.labelInactive]}>
              {tab.label}
            </Text>
            {isActive && <View style={styles.underline} />}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  tab: {
    paddingBottom: spacing.md,
    marginRight: spacing.xl,
    alignItems: 'center',
  },
  label: {
    fontSize: 17,
    fontWeight: '600',
  },
  labelActive: {
    color: colors.textPrimary,
  },
  labelInactive: {
    color: colors.textTertiary,
    fontWeight: '400',
  },
  underline: {
    marginTop: spacing.sm,
    height: 2,
    width: '100%',
    backgroundColor: colors.greenAccent,
  },
});
