import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { ChatItem } from "@/types";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "../common/Avatar";

interface ChatListItemProps {
  item: ChatItem;
  onPress?: () => void;
}

function TickIcon({ tick }: { tick?: ChatItem["tick"] }) {
  if (!tick || tick === "none") return null;
  const color = tick === "read" ? "#53BDEB" : colors.textSecondary;
  const iconName = tick === "sent" ? "checkmark" : "checkmark-done";
  return (
    <Ionicons name={iconName} size={16} color={color} style={styles.tick} />
  );
}

export default function ChatListItem({ item, onPress }: ChatListItemProps) {
  const isGreenTimestamp = item.timestampColor === "green";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <View>
        <Avatar avatar={item.avatar} size={55} />
        {item.isSyncing && (
          <View style={styles.syncBadge}>
            <Ionicons name="sync" size={12} color={colors.white} />
          </View>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.topLine}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text
            style={[styles.timestamp, isGreenTimestamp && styles.greenText]}
          >
            {item.timestamp}
          </Text>
        </View>

        <View style={styles.bottomLine}>
          <TickIcon tick={item.tick} />
          <Text
            style={[
              styles.message,
              item.messageColor === "green" && styles.greenText,
            ]}
            numberOfLines={1}
          >
            {item.message}
          </Text>

          <View style={styles.trailing}>
            {item.pinned && (
              <FontAwesome6
                name="thumbtack"
                size={14}
                color={colors.pinIcon}
                style={styles.pin}
              />
            )}

            {!!item.unreadCount && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.unreadCount}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
  },
  pressed: {
    backgroundColor: colors.overlayLight,
  },
  content: {
    flex: 1,
    marginLeft: spacing.md,
  },
  topLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  name: {
    ...typography.bodyMedium,
    color: colors.textPrimary,
    flexShrink: 1,
    marginRight: spacing.sm,
  },
  timestamp: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  bottomLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  tick: {
    marginRight: 4,
  },
  message: {
    ...typography.subhead,
    color: colors.textSecondary,
    flex: 1,
  },
  trailing: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: spacing.sm,
  },
  pin: {
    marginLeft: spacing.xs,
    transform: [{ rotate: "45deg" }],
  },
  badge: {
    backgroundColor: colors.badgeGreen,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: spacing.xs,
  },
  badgeText: {
    ...typography.footnote,
    color: colors.white,
    fontWeight: "700",
  },
  greenText: {
    color: colors.green,
  },
  syncBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.surfaceElevated,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.background,
  },
});
