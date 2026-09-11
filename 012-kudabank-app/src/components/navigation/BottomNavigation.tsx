import { HomeIcon } from "@/components/icons/Icons";
import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { BottomTabKey } from "@/types";
import { usePathname } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TABS: {
  key: BottomTabKey;
  label: string;
  Icon: typeof HomeIcon;
  route: string;
}[] = [{ key: "home", label: "Home", Icon: HomeIcon, route: "/" }];

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return <View style={[styles.container, { paddingBottom: 10 }]}></View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
  pillBar: {
    flexDirection: "row",
    backgroundColor: colors.navPillBackground,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.navBorder,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
});

export default BottomNavigation;
