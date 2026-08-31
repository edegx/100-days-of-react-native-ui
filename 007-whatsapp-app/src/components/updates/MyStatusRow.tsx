import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { myStatus } from "@/data/updates";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";

export default function MyStatusRow() {
  return (
    <Pressable style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View>
        <Avatar avatar={myStatus.avatar} size={54} />
        <View style={styles.plusBadge}>
          <Ionicons name="add" size={13} color={colors.white} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{myStatus.name}</Text>
        <Text style={styles.subtitle}>{myStatus.subtitle}</Text>
      </View>

      <View style={styles.actions}>
        <IconButton
          name="camera"
          size={34}
          iconSize={16}
          backgroundColor="#1c1c1c"
        />
        <IconButton
          name="pen"
          size={34}
          iconSize={16}
          backgroundColor="#1c1c1c"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  pressed: {
    backgroundColor: colors.overlayLight,
  },
  plusBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.background,
  },
  content: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    ...typography.bodyMedium,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  actions: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
