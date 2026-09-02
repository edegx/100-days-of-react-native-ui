import { colors } from "@/constants/colors";
import { imageMap } from "@/constants/imageMap";
import { radius, spacing } from "@/constants/spacing";
import { Category } from "@/types";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryItemProps {
  category: Category;
  onPress?: () => void;
}

export default function CategoryItem({ category, onPress }: CategoryItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <View style={[styles.iconWrapper]}>
        <Image
          source={imageMap[category.icon]}
          style={{ width: 48, height: 48, resizeMode: "contain" }}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {category.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 120,
    backgroundColor: colors.white,
    paddingVertical: spacing.lg,
    borderRadius: radius.lg,
    marginRight: spacing.md,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.03,
    // shadowRadius: 8,
    elevation: 1,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 11.5,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});
