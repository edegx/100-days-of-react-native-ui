import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationItem from './NavigationItem';
import { navItems } from '@/data/navigation';
import { colors } from '@/constants/colors';
import type { NavItemData } from '@/types';

export default function BottomNavigation() {
  const [activeId, setActiveId] = useState('home');

  const handlePress = (item: NavItemData) => {
    setActiveId(item.id);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.container}>
        {navItems.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={item.id === activeId}
            onPress={handlePress}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.headerBackground,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
  },
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 6,
  },
});
