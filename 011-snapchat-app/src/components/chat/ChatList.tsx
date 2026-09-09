import React from 'react';
import { FlatList } from 'react-native';
import { chats } from '@/data/chats';
import { ChatItem } from '@/types/chat';
import ChatListItem from './ChatListItem';

export default function ChatList() {
  const renderItem = ({ item }: { item: ChatItem }) => <ChatListItem item={item} />;

  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 12 }}
    />
  );
}
