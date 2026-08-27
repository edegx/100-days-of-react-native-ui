import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface InterestBannerProps {
  onPress?: () => void;
}

export default function InterestBanner({ onPress }: InterestBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MaterialCommunityIcons
          name="ticket-percent"
          size={18}
          color={colors.purple}
        />
        <Text style={styles.text}>Enable interest on your balance</Text>
      </View>

      <Pressable style={styles.right}>
        <Text style={styles.enableText}>Enable Now</Text>
        <View style={styles.chevronCircle}>
          <Ionicons name="chevron-forward" size={12} color={colors.white} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    flexShrink: 1,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "500",
    flexShrink: 1,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  enableText: {
    color: colors.purple,
    fontSize: 14,
    fontWeight: "600",
  },
  chevronCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
  },
});
