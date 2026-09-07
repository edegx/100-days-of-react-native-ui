import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <IconButton style={styles.profileRow} onPress={() => {}}>
        <Avatar size={40} />
        <Text style={styles.name}>{name}</Text>
        <Ionicons
          name="chevron-forward"
          size={18}
          color={colors.textSecondary}
        />
      </IconButton>

      <View style={styles.actions}>
        <IconButton
          onPress={() => router.push("/search")}
          style={styles.actionIcon}
        >
          <Ionicons name="search" size={24} color={colors.textPrimary} />
        </IconButton>
        <IconButton onPress={() => {}} style={styles.actionIcon}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.textPrimary}
          />
        </IconButton>
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
    paddingVertical: spacing.md,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    flexShrink: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
  actionIcon: {
    width: 28,
    height: 28,
  },
});
