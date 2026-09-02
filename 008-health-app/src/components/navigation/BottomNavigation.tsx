import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ICONS: Record<
  string,
  { set: "ionicons" | "material-community"; name: string }
> = {
  index: { set: "ionicons", name: "home" },
  treat: { set: "material-community", name: "stethoscope" },
  medicine: { set: "material-community", name: "pill" },
  clinic: { set: "material-community", name: "hospital-building" },
  profile: { set: "ionicons", name: "person-outline" },
};

const LABELS: Record<string, string> = {
  index: "Home",
  treat: "Treat",
  medicine: "Medicine",
  clinic: "Clinic",
  profile: "Profile",
};

function TabIcon({
  routeName,
  focused,
}: {
  routeName: string;
  focused: boolean;
}) {
  const icon = ICONS[routeName] ?? ICONS.profile;
  const color = focused ? colors.white : colors.textMuted;

  if (icon.set === "material-community") {
    return (
      <MaterialCommunityIcons name={icon.name as any} size={20} color={color} />
    );
  }
  return <Ionicons name={icon.name as any} size={20} color={color} />;
}

interface TabRoute {
  key: string;
  name: string;
}

interface CustomTabBarProps {
  state: {
    index: number;
    routes: TabRoute[];
  };
  // React Navigation's `navigation` object carries deeply generic method
  // signatures that don't structurally match a hand-written type, so `any`
  // is used here rather than fighting the upstream generics.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

export default function BottomNavigation({
  state,
  navigation,
}: CustomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: Math.max(insets.bottom, spacing.md) },
      ]}
    >
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const label = LABELS[route.name];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={[styles.tab, focused && styles.tabActive]}
          >
            <TabIcon routeName={route.name} focused={focused} />
            {focused && <Text style={styles.tabLabel}>{label}</Text>}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 8,
  },
  tab: {
    width: 44,
    height: 44,
    borderRadius: radius.round,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: {
    flexDirection: "row",
    width: "auto",
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.primary,
    gap: spacing.sm,
  },
  tabLabel: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "600",
  },
});
