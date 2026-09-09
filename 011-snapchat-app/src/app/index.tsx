import ChatList from "@/components/chat/ChatList";
import ChatTabs from "@/components/chat/ChatTabs";
import AppHeader from "@/components/common/AppHeader";
import Screen from "@/components/common/Screen";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function ChatScreen() {
  return (
    <Screen>
      <AppHeader title="Chat" />
      <ChatTabs />
      <ChatList />

      <BottomNavigation activeTab="chat" />
    </Screen>
  );
}
