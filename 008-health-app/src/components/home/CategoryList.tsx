import CategoryItem from "@/components/home/CategoryItem";
import { spacing } from "@/constants/spacing";
import { categories } from "@/data/categories";
import { Category } from "@/types";
import { FlatList, StyleSheet } from "react-native";

export default function CategoryList() {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item: Category) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => <CategoryItem category={item} />}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: spacing.xl,
    paddingRight: spacing.sm,
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: spacing.md,
  },
});
