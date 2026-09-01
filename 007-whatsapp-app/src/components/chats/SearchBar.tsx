import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.wrapper}>
      <Ionicons
        name="search"
        style={styles.icon}
        size={18}
        color={colors.textSecondary}
      />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Search"
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.searchBar,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    paddingHorizontal: spacing.md,
    height: 40,
    marginBottom: spacing.lg,
  },
  icon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    ...typography.body,
    color: colors.textPrimary,
    padding: 0,
  },
});
