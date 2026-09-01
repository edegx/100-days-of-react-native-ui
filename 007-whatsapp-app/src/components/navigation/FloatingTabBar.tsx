import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { TAB_CONFIG } from "@/data/navItem";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

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

const HORIZONTAL_MARGIN = spacing.md * 2;

export default function FloatingTabBar({
  state,
  navigation,
}: FloatingTabBarProps) {
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = useWindowDimensions();

  const visibleRoutes = state.routes.filter((r) => TAB_CONFIG[r.name]);
  const tabWidth = (screenWidth - HORIZONTAL_MARGIN) / visibleRoutes.length;

  const indicatorX = useSharedValue(state.index * tabWidth);
  const pressScale = useSharedValue(1);

  useEffect(() => {
    indicatorX.value = withSpring(state.index * tabWidth, {
      damping: 16,
      stiffness: 180,
      mass: 0.7,
    });
  }, [state.index, tabWidth]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }, { scale: pressScale.value }],
    width: tabWidth,
  }));

  return (
    <View
      style={[
        styles.wrapper,
        { paddingBottom: Math.max(insets.bottom - 20, 10) },
      ]}
    >
      <View style={styles.pillShadowWrap}>
        <BlurView intensity={50} tint="dark" style={styles.pill}>
          {/* liquid glass sheen */}
          <View pointerEvents="none" style={styles.sheen} />

          {/* sliding active indicator */}
          <Animated.View style={[styles.indicator, indicatorStyle]} />

          {state.routes.map((route, index) => {
            const config = TAB_CONFIG[route.name];
            if (!config) return null;
            const isFocused = state.index === index;

            const onPress = () => {
              pressScale.value = withSpring(
                0.9,
                { damping: 12, stiffness: 300 },
                () => {
                  pressScale.value = withSpring(1, {
                    damping: 12,
                    stiffness: 300,
                  });
                },
              );

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
              <Pressable
                key={route.key}
                onPress={onPress}
                style={styles.tabItem}
              >
                <View>
                  <Ionicons
                    name={isFocused ? config.iconActive : config.icon}
                    size={24}
                    color={
                      isFocused ? colors.textPrimary : colors.textSecondary
                    }
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
        </BlurView>
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
  pillShadowWrap: {
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
  },
  pill: {
    flexDirection: "row",
    borderRadius: 32,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.18)",
    paddingTop: spacing.sm,
    paddingBottom: spacing.xs,
  },
  sheen: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  indicator: {
    position: "absolute",
    top: 4,
    bottom: 4,
    left: 0,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.2)",
  },
  tabItem: {
    height: 50,
    padding: 2,
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
    gap: 3,
    zIndex: 1,
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
