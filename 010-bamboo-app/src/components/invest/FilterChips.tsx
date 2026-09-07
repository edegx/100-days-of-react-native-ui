import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { FilterOption } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface FilterChipsProps {
  selected: FilterOption;
  onSelect: (option: FilterOption) => void;
}

const options: { key: FilterOption; label: string }[] = [
  { key: "all", label: "All" },
  { key: "usd", label: "USD only" },
  { key: "naira", label: "Naira only" },
];

export default function FilterChips({ selected, onSelect }: FilterChipsProps) {
  return (
    <View style={styles.row}>
      {options.map((option) => {
        const isActive = option.key === selected;
        return (
          <Pressable
            key={option.key}
            onPress={() => onSelect(option.key)}
            style={[
              styles.chip,
              isActive ? styles.chipActive : styles.chipInactive,
            ]}
          >
            <Text
              style={[
                styles.label,
                isActive ? styles.labelActive : styles.labelInactive,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  chip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: 10,
    borderRadius: radius.pill,
  },
  chipActive: {
    backgroundColor: colors.textPrimary,
  },
  chipInactive: {
    backgroundColor: colors.greenDark,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  labelActive: {
    color: colors.background,
  },
  labelInactive: {
    color: colors.greenAccent,
  },
});
