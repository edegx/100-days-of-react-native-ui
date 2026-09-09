import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";

interface AppHeaderProps {
  title: string;
  avatarUri?: string;
  notificationCount?: string;
}

export default function AppHeader({
  title,
  avatarUri = "https://placehold.co/80x80/2a2a2a/ffffff.png?text=Me",
  notificationCount = "10+",
}: AppHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left Section: Avatar + Search */}
      <View style={styles.leftSection}>
        <Pressable style={styles.avatarWrapper}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} />
          <View style={styles.redDot} />
          <View style={styles.starBadge}>
            <Ionicons name="star" size={9} color={colors.background} />
          </View>
        </Pressable>

        <IconButton
          name="search"
          containerSize={40}
          size={19}
          onPress={() => {}}
        />
      </View>

      {/* Center Section: Title */}
      <Text style={[typography.screenTitle, styles.title]}>{title}</Text>

      {/* Right Section: Notifications + Person Add + Ellipsis */}
      <View style={styles.rightSection}>
        <IconButton
          name="notifications"
          containerSize={40}
          size={19}
          badgeCount={notificationCount}
          onPress={() => {}}
        />

        <IconButton
          name="person-add"
          containerSize={40}
          size={18}
          backgroundColor={colors.yellow}
          color={colors.background}
          onPress={() => {}}
        />

        <IconButton
          name="ellipsis-horizontal"
          containerSize={40}
          size={20}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.base,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  title: {
    flex: 1,
    textAlign: "center",
  },
  avatarWrapper: {
    width: 40,
    height: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  redDot: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.badgeRed,
    borderWidth: 1.5,
    borderColor: colors.background,
  },
  starBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: colors.background,
  },
});
