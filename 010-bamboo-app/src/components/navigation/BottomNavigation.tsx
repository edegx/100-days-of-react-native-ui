import { colors } from "@/constants/colors";
import { usePathname, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavigationItem, { NavigationItemData } from "./NavigationItem";

const navigationItems: NavigationItemData[] = [
  { key: "home", label: "Home", icon: "home", route: "/" },
  { key: "invest", label: "Invest", icon: "swap-vertical", route: "/invest" },
  { key: "learn", label: "Learn", icon: "school", route: "/learn" },
  { key: "help", label: "Help", icon: "chatbubble-ellipses", route: "/help" },
];

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const handlePress = (route: NavigationItemData["route"]) => {
    if (route === pathname) return;
    if (route === "/help") return;
    router.push(route);
  };

  return (
    <View
      style={[styles.container, { paddingBottom: Math.max(insets.bottom, 10) }]}
    >
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.key}
          item={item}
          isActive={pathname === item.route}
          onPress={() => handlePress(item.route)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
    paddingTop: 10,
  },
});
