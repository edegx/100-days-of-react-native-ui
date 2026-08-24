import { FlatList, StyleSheet, View } from "react-native";

import { spacing } from "@/constants/spacing";
import { MenuItem } from "@/types";
import SectionHeader from "../common/SectionHeader";
import MenuItemCard from "./MenuItemCard";

interface PopularItemsSectionProps {
  title: string;
  items: MenuItem[];
  onAddItem?: (item: MenuItem) => void;
}

export default function PopularItemsSection({
  title,
  items,
  onAddItem,
}: PopularItemsSectionProps) {
  return (
    <View style={styles.container}>
      {title.length > 0 && <SectionHeader title={title} />}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onAdd={() => onAddItem?.(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xl,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginTop: spacing.md,
  },
});
