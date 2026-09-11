import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";
import { BellIcon, HeadsetIcon, SearchIcon } from "../icons/Icons";

const AVATAR_URI = "https://avatars.githubusercontent.com/u/66500956?v=4";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/pay")} hitSlop={8}>
        <Avatar source={{ uri: AVATAR_URI }} />
      </Pressable>

      <View style={styles.searchBar}>
        <SearchIcon size={20} color={colors.textTertiary} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.textTertiary}
          style={styles.searchInput}
        />
      </View>

      <IconButton onPress={() => {}}>
        <BellIcon size={20} color={colors.textPrimary} />
      </IconButton>
      <IconButton onPress={() => {}} badgeLabel="HELP">
        <HeadsetIcon size={20} color={colors.textPrimary} />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    gap: spacing.sm,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radii.sm,
    height: 44,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  searchInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
    padding: 0,
  },
});

export default Header;
