import { FlatList, StyleSheet } from "react-native";

import CategoryItem from "@/components/home/CategoryItem";
import { spacing } from "@/constants/spacing";
import { categories } from "@/data/categories";

export default function CategoryList() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CategoryItem category={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
    marginTop: spacing.lg,
  },
});
