import React from 'react';
import { Tabs } from 'expo-router';
import BottomNavigation from '@/components/navigation/BottomNavigation';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomNavigation {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="savings" options={{ title: 'Savings' }} />
      <Tabs.Screen name="get-it" options={{ title: 'Get It' }} />
      <Tabs.Screen name="invest" options={{ title: 'Invest' }} />
      <Tabs.Screen name="account" options={{ title: 'Account' }} />
    </Tabs>
  );
}
