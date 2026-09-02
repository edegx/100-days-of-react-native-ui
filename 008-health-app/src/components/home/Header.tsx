import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Image, StyleSheet, Text, View } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";

interface HeaderProps {
  name: string;
  avatarUri: string;
  hasNotification?: boolean;
  onNotificationPress?: () => void;
  onAvatarPress?: () => void;
}

export default function Header({
  name,
  avatarUri,
  hasNotification = true,
  onNotificationPress,
  onAvatarPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.name}>{name}!</Text>
      </View>

      <View style={styles.actions}>
        <IconButton onPress={onNotificationPress} style={styles.bellButton}>
          <Image
            source={require("../../../assets/images/notification.png")}
            style={styles.bellIcon}
          />
          {hasNotification && <View style={styles.dot} />}
        </IconButton>
        <Avatar uri={avatarUri} size={40} badge="PRO" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "400",
    color: colors.textPrimary,
    lineHeight: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
    lineHeight: 30,
  },
  actions: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    borderRadius: 50,
    padding: 2,
  },
  bellButton: {
    borderWidth: 0,
    backgroundColor: "transparent",
  },
  bellIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  dot: {
    position: "absolute",
    top: 10,
    right: 12,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#f5a623",
  },
});
