export type ChatStatus = 'delivered' | 'opened' | 'received' | 'tap-to-chat' | 'new-snaps' | 'new-snaps-chats';

export interface ChatItem {
  id: string;
  name: string;
  nameEmojis?: string;
  avatarUri: string;
  hasStoryRing?: boolean;
  storyRingColor?: string;
  statusIcon: 'chevron-delivered' | 'chevron-opened' | 'square-solid' | 'chat-bubble' | 'none';
  statusText: string;
  timestamp?: string;
  streakCount?: string;
  isBold: boolean;
  trailingIcon: 'camera' | 'chat-bubble';
  trailingEmoji?: string;
}
