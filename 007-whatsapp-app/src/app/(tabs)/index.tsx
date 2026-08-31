


import ArchivedRow from "@/components/chats/ArchivedRow";
import ChatListItem from "@/components/chats/ChatListItem";
import EncryptionFooter from "@/components/chats/EncryptionFooter";
import SearchBar from "@/components/chats/SearchBar";
import IconButton from "@/components/common/IconButton";
import Screen from "@/components/common/Screen";
import ScreenHeader from "@/components/common/ScreenHeader";
import Separator from "@/components/common/Separator";
import { spacing } from "@/constants/spacing";
import { chats } from "@/data/chats";
import { FlatList, StyleSheet } from "react-native";

export default function ChatsScreen() {
  return (
    <Screen>
      <ScreenHeader
        title="Chats"
        rightActions={
          <>
            <IconButton name="camera" backgroundColor="#1c1c1c" />
            <IconButton
              name="add"
              backgroundColor="#FFFFFF"
              iconColor="#000000"
            />
          </>
        }
      />

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <SearchBar />
            <ArchivedRow count={6} />
          </>
        }
        renderItem={({ item }) => <ChatListItem item={item} />}
        ItemSeparatorComponent={() => (
          <Separator inset={spacing.lg + 54 + spacing.md} />
        )}
        ListFooterComponent={<EncryptionFooter />}
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
