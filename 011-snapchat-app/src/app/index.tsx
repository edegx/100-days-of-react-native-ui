import ChatList from "@/components/chat/ChatList";
import AppHeader from "@/components/common/AppHeader";
import Screen from "@/components/common/Screen";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function ChatScreen() {
  return (
    <Screen>
      <AppHeader title="Chat" />

      <ChatList />

      <BottomNavigation activeTab="chat" />
    </Screen>
  );
}
