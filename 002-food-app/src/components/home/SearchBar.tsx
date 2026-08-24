import { Image, StyleSheet, TextInput, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  placeholder?: string;
  onFilterPress?: () => void;
}

export default function SearchBar({
  placeholder = "Search Food, groceries, drink, etc.",
  onFilterPress,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrap}>
        <Image
          source={require("../../../assets/images/search.png")}
          style={{ width: 24, height: 24 }}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.mediumGray}
          style={styles.input}
        />
      </View>
      <View style={styles.filterButton}>
        <Ionicons
          name="options-outline"
          size={18}
          onPress={onFilterPress}
          color={colors.black}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
  },
  inputWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.chipBackground,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 46,
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.black,
  },
  filterButton: {
    width: 46,
    height: 46,
    borderRadius: radius.md,
    backgroundColor: colors.chipBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});
