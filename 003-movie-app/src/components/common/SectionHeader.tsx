import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  onPressViewAll?: () => void;
}

export default function SectionHeader({
  title,
  onPressViewAll,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={typography.sectionTitle}>{title}</Text>
      <Pressable onPress={onPressViewAll} hitSlop={6}>
        <Text style={typography.viewAll}>View All</Text>
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
    marginBottom: spacing.md,
  },
});
