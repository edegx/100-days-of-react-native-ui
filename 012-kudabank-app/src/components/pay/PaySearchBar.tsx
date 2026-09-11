import { SearchIcon } from "@/components/icons/Icons";
import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const PaySearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchIcon size={20} color={colors.textTertiary} />
      <TextInput
        placeholder="Search for anything"
        placeholderTextColor={colors.textTertiary}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radii.sm,
    height: 50,
    marginHorizontal: spacing.lg,
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
    padding: 0,
  },
});

export default PaySearchBar;
