import {
  BorrowIcon,
  HomeIcon,
  PayIcon,
  SaveIcon,
  SendIcon,
} from "@/components/icons/Icons";
import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { BottomTabKey } from "@/types";
import { router, usePathname } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavigationItem from "./NavigationItem";

const TABS: {
  key: BottomTabKey;
  label: string;
  Icon: typeof HomeIcon;
  route: string;
}[] = [
  { key: "home", label: "Home", Icon: HomeIcon, route: "/" },
  { key: "pay", label: "Pay", Icon: PayIcon, route: "/pay" },
  { key: "send", label: "Send", Icon: SendIcon, route: "/" },
  { key: "save", label: "Save", Icon: SaveIcon, route: "/" },
  { key: "borrow", label: "Borrow", Icon: BorrowIcon, route: "/" },
];

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: 10 }]}>
      <View style={styles.pillBar}>
        {TABS.map((tab) => {
          const active =
            tab.route === "/"
              ? pathname === "/" && tab.key === "home"
              : pathname === tab.route;
          return (
            <NavigationItem
              key={tab.key}
              label={tab.label}
              Icon={tab.Icon}
              active={active}
              onPress={() => router.push(tab.route as any)}
            />
          );
        })}
      </View>
    </View>
  );
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
