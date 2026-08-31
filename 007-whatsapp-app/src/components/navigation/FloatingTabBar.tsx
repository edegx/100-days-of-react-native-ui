import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TabRoute {
  key: string;
  name: string;
}

interface FloatingTabBarProps {
  state: {
    index: number;
    routes: TabRoute[];
  };
  navigation: {
    emit: (event: {
      type: string;
      target: string;
      canPreventDefault: boolean;
    }) => {
      defaultPrevented: boolean;
    };
    navigate: (name: string) => void;
  };
}

interface TabConfig {
  key: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
  badge?: "dot" | number;
}

const TAB_CONFIG: Record<string, TabConfig> = {
  updates: {
    key: "updates",
    label: "Updates",
    icon: "sync-circle-outline",
    iconActive: "sync-circle",
    badge: "dot",
  },
  calls: {
    key: "calls",
    label: "Calls",
    icon: "call-outline",
    iconActive: "call",
    badge: 10,
  },
  tools: {
    key: "tools",
    label: "Tools",
    icon: "storefront-outline",
    iconActive: "storefront",
    badge: "dot",
  },
  index: {
    key: "index",
    label: "Chats",
    icon: "chatbubbles-outline",
    iconActive: "chatbubbles",
    badge: 440,
  },
  settings: {
    key: "settings",
    label: "Settings",
    icon: "settings-outline",
    iconActive: "settings",
    badge: undefined,
  },
};

export default function FloatingTabBar({
  state,
  navigation,
}: FloatingTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrapper,
        { paddingBottom: Math.max(insets.bottom - 6, 10) },
      ]}
    >
      <View style={styles.pill}>
        {state.routes.map((route, index) => {
          const config = TAB_CONFIG[route.name];
          if (!config) return null;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable key={route.key} onPress={onPress} style={styles.tabItem}>
              <View>
                <Ionicons
                  name={isFocused ? config.iconActive : config.icon}
                  size={25}
                  color={isFocused ? colors.textPrimary : colors.textSecondary}
                />
                {config.badge === "dot" && <View style={styles.dotBadge} />}
                {typeof config.badge === "number" && (
                  <View style={styles.countBadge}>
                    <Text style={styles.countBadgeText}>
                      {config.badge > 99 ? "99+" : config.badge}
                    </Text>
                  </View>
                )}
              </View>
              <Text
                style={[
                  styles.label,
                  {
                    color: isFocused
                      ? colors.textPrimary
                      : colors.textSecondary,
                  },
                  isFocused && styles.labelActive,
                ]}
              >
                {config.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.md,
    backgroundColor: "transparent",
  },
  pill: {
    flexDirection: "row",
    backgroundColor: colors.tabBarBg,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.tabBarBorder,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xs,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    gap: 3,
  },
  label: {
    ...typography.footnote,
  },
  labelActive: {
    fontWeight: "600",
  },
  dotBadge: {
    position: "absolute",
    top: -2,
    right: -6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.green,
  },
  countBadge: {
    position: "absolute",
    top: -6,
    right: -14,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    paddingHorizontal: 4,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  countBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "700",
  },
});
