import React from 'react';
import Screen from '@/components/common/Screen';
import ScreenHeader from '@/components/common/ScreenHeader';
import ToolsEmptyState from '@/components/tools/ToolsEmptyState';

export default function ToolsScreen() {
  return (
    <Screen>
      <ScreenHeader title="Tools" />
      <ToolsEmptyState />
    </Screen>
  );
}
