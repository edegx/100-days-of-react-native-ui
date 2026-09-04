import { colors } from "@/constants/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavigationItem from "./NavigationItem";
import { HomeIcon, SavingsIcon, InvestIcon, GetItIcon } from "../common/icons";

const ICONS: Record<string, any> = {
  index: HomeIcon,
  savings: SavingsIcon,
  "get-it": GetItIcon,
  invest: InvestIcon,
  account: "user", // special case for avatar
};

const LABELS: Record<string, string> = {
  index: "Home",
  savings: "Savings",
  "get-it": "Get It",
  invest: "Invest",
  account: "Account",
};

export default function BottomNavigation({
  state,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 14) }]}
    >
      {state.routes.map((route: any, index: any) => {
        const focused = state.index === index;
        const label = LABELS[route.name] ?? route.name;
        const IconComponent = ICONS[route.name];

        return (
          <NavigationItem
            key={route.key}
            label={label}
            iconComponent={IconComponent}
            focused={focused}
            badge={route.name === "get-it" ? "New" : undefined}
            isAccount={route.name === "account"}
            onPress={() => {
              if (!focused) {
                navigation.navigate(route.name);
              }
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
    paddingTop: 10,
  },
});