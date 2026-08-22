import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';
import { NavItem } from '@/types';

const iconMap: Record<NavItem['icon'], keyof typeof Ionicons.glyphMap> = {
  home: 'home',
  history: 'sync',
  cards: 'card-outline',
  rewards: 'gift-outline',
};

interface NavigationItemProps {
  item: NavItem;
  isActive: boolean;
  onPress: () => void;
}

export default function NavigationItem({
  item,
  isActive,
  onPress,
}: NavigationItemProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
        <Ionicons
          name={iconMap[item.icon]}
          size={20}
          color={colors.black}
        />
      </View>
      <Text style={styles.label}>{item.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    flex: 1,
  },
  iconWrap: {
    width: 44,
    height: 32,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: colors.pill,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.black,
  },
});
