import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '@/components/common/Screen';
import ScreenHeader from '@/components/common/ScreenHeader';
import IconButton from '@/components/common/IconButton';
import CallActionsRow from '@/components/calls/CallActionsRow';
import CallListItem from '@/components/calls/CallListItem';
import SectionLabel from '@/components/updates/SectionLabel';
import { calls } from '@/data/calls';

export default function CallsScreen() {
  return (
    <Screen>
      <ScreenHeader
        title="Calls"
        rightActions={<IconButton name="add" backgroundColor="#FFFFFF" iconColor="#000000" />}
      />

      <FlatList
        data={calls}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <CallActionsRow />
            <SectionLabel label="Recent" />
          </>
        }
        renderItem={({ item }) => <CallListItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 120,
  },
});
