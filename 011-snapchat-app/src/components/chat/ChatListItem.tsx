import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { ChatItem } from '@/types/chat';
import Avatar from '@/components/common/Avatar';

interface ChatListItemProps {
  item: ChatItem;
  onPress?: () => void;
}

function StatusIcon({ item }: { item: ChatItem }) {
  const color = item.isBold ? colors.purpleText : colors.textSecondary;

  switch (item.statusIcon) {
    case 'chevron-delivered':
      return <Ionicons name="play" size={13} color={colors.blueDelivered} />;
    case 'chevron-opened':
      return <Ionicons name="play" size={13} color={colors.textSecondary} />;
    case 'square-solid':
      return <View style={[styles.squareIcon, { backgroundColor: color }]} />;
    case 'chat-bubble':
      return <Ionicons name="chatbubble" size={13} color={color} />;
    default:
      return <Ionicons name="chatbubble-outline" size={13} color={colors.textSecondary} />;
  }
}

export default function ChatListItem({ item, onPress }: ChatListItemProps) {
  const statusColor = item.isBold ? colors.purpleText : colors.textSecondary;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Avatar
        uri={item.avatarUri}
        size={52}
        ringColor={item.hasStoryRing ? item.storyRingColor : undefined}
      />

      <View style={styles.textBlock}>
        <View style={styles.nameRow}>
          <Text style={typography.displayName} numberOfLines={1}>
            {item.name}
          </Text>
          {item.nameEmojis ? (
            <Text style={styles.nameEmojis} numberOfLines={1}>
              {' '}
              {item.nameEmojis}
            </Text>
          ) : null}
        </View>

        <View style={styles.statusRow}>
          <StatusIcon item={item} />
          <Text
            style={[
              styles.statusText,
              { color: statusColor, fontWeight: item.isBold ? '700' : '400' },
            ]}
            numberOfLines={1}
          >
            {item.statusText}
          </Text>
          {item.timestamp ? (
            <Text style={styles.timestamp}> · {item.timestamp}</Text>
          ) : null}
          {item.streakCount ? (
            <Text style={styles.streak}> · {item.streakCount} 🔥</Text>
          ) : null}
        </View>
      </View>

      {item.trailingEmoji ? (
        <Text style={styles.trailingEmoji}>{item.trailingEmoji}</Text>
      ) : null}

      <Ionicons
        name={item.trailingIcon === 'camera' ? 'camera-outline' : 'chatbox-outline'}
        size={22}
        color={colors.textSecondary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm + 2,
    gap: spacing.md,
  },
  textBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameEmojis: {
    fontSize: 13,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    gap: spacing.xs,
  },
  statusText: {
    fontSize: 13,
    maxWidth: 190,
  },
  timestamp: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  streak: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  squareIcon: {
    width: 11,
    height: 11,
    borderRadius: 2,
  },
  trailingEmoji: {
    fontSize: 20,
    marginRight: spacing.xs,
  },
});
