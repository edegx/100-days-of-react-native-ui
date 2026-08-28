import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import type { ServiceItemData } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

interface ServiceItemProps {
  item: ServiceItemData;
  onPress?: (item: ServiceItemData) => void;
}

export default function ServiceItem({ item, onPress }: ServiceItemProps) {
  return (
    <Pressable style={styles.tile} onPress={() => onPress?.(item)}>
      <Ionicons name={item.icon} size={24} color={colors.textPrimary} />
      <Text style={styles.label}>{item.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: "23.5%",
    aspectRatio: 1,
    backgroundColor: colors.serviceTile,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 12.5,
    fontWeight: "700",
    marginTop: spacing.sm,
    textAlign: "center",
  },
});
