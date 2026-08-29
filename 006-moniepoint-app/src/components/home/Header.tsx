import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";

const AVATAR_URI =
  "https://pbs.twimg.com/profile_images/1650589736883331076/b8HCH0SZ_400x400.jpg";

interface HeaderProps {
  level: string;
  onSupportPress?: () => void;
  onNotificationPress?: () => void;
}

export default function Header({
  level,
  onSupportPress,
  onNotificationPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar uri={AVATAR_URI} size={44} />
        <Text style={styles.level}>{level}</Text>
      </View>
      <View style={styles.right}>
        <IconButton
          name="headset-outline"
          onPress={onSupportPress}
          style={styles.iconSpacing}
        />
        <IconButton name="notifications-outline" onPress={onSupportPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  level: {
    marginLeft: spacing.md,
    color: colors.textSecondary,
    fontSize: 17,
    fontWeight: "600",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginRight: spacing.xl,
  },
});
