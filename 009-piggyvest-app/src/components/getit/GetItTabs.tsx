import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GetItTabKey } from '@/types';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

const TABS: { key: GetItTabKey; label: string }[] = [
  { key: 'explore', label: 'Explore' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'complete', label: 'Complete' },
  { key: 'rewards', label: 'Rewards' },
];

interface GetItTabsProps {
  activeTab: GetItTabKey;
  onChange: (tab: GetItTabKey) => void;
}

export default function GetItTabs({ activeTab, onChange }: GetItTabsProps) {
  return (
    <View style={styles.wrapper}>
      {TABS.map((tab) => {
        const focused = tab.key === activeTab;
        return (
          <Pressable key={tab.key} style={styles.tab} onPress={() => onChange(tab.key)}>
            <Text style={[styles.label, focused && styles.labelActive]}>{tab.label}</Text>
            {focused && <View style={styles.indicator} />}
          </Pressable>
        );
      })}
      <View style={styles.baseline} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    position: 'relative',
  },
  tab: {
    marginRight: spacing.xxl,
    paddingBottom: spacing.md,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textMuted,
  },
  labelActive: {
    color: colors.white,
    fontWeight: '700',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: colors.orange,
  },
  baseline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.divider,
  },
});
