export interface AvatarInfo {
  initials: string;
  color: string;
}

export type MessageTickState = 'none' | 'sent' | 'delivered' | 'read';

export interface ChatItem {
  id: string;
  name: string;
  avatar: AvatarInfo;
  message: string;
  timestamp: string;
  timestampColor?: 'default' | 'green';
  pinned?: boolean;
  unreadCount?: number;
  tick?: MessageTickState;
  messageColor?: 'default' | 'green';
  isBold?: boolean;
  isSyncing?: boolean;
}

export interface UpdateItem {
  id: string;
  name: string;
  avatar: AvatarInfo;
  time: string;
  ringStyle: 'solid' | 'dashed' | 'partial';
  seen?: boolean;
}

export type CallType = 'missed' | 'outgoing' | 'incoming';

export interface CallItem {
  id: string;
  name: string;
  avatar: AvatarInfo;
  date: string;
  type: CallType;
  count?: number;
  isSaved?: boolean;
}

export interface SettingsListItemData {
  id: string;
  icon: string;
  label: string;
  showChevron?: boolean;
}

export interface SettingsSectionData {
  id: string;
  items: SettingsListItemData[];
}
