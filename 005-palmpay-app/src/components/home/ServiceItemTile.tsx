import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { ServiceItem } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppIcon from "../common/AppIcon";

interface ServiceItemTileProps {
  item: ServiceItem;
  onPress?: () => void;
}

export default function ServiceItemTile({
  item,
  onPress,
}: ServiceItemTileProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.7 }]}
    >
      <View style={styles.iconWrapper}>
        <AppIcon icon={item.icon} size={35} color={item.iconBackground} />
        {item.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        )}
      </View>
      <Text style={styles.label} numberOfLines={1}>
        {item.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "25%",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  iconWrapper: {
    position: "relative",
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: -8,
    right: -10,
    backgroundColor: colors.orange,
    borderRadius: radius.sm,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: "700",
  },
  label: {
    color: colors.textPrimary,
    fontSize: 12.5,
    fontWeight: "500",
    textAlign: "center",
  },
});
