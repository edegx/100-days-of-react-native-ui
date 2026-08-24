import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { MenuItem } from "@/types";
import { Ionicons } from "@expo/vector-icons";

interface MenuItemCardProps {
  item: MenuItem;
  onAdd?: () => void;
}

export default function MenuItemCard({ item, onAdd }: MenuItemCardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <Text style={styles.name} numberOfLines={1}>
        {item.name}
      </Text>
      <View style={styles.footerRow}>
        <Text style={styles.price}>{item.price}</Text>
        <Pressable style={styles.addButton} onPress={onAdd}>
          <Ionicons name="add" size={16} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 132,
  },
  image: {
    width: 132,
    height: 100,
    borderRadius: radius.md,
    backgroundColor: colors.chipBackground,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.black,
    marginTop: spacing.sm,
    lineHeight: 17,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.sm,
  },
  price: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.black,
  },
  addButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
