import Badge from "@/components/common/Badge";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import {
  CameraIcon,
  ChatIcon,
  LocationIcon,
  PeopleIcon,
  PlayIcon,
} from "./Icons";

export type NavTab = "map" | "chat" | "camera" | "friends" | "stories";

interface BottomNavigationProps {
  activeTab?: NavTab;
}

interface NavItemConfig {
  key: NavTab;
  icon: React.ReactNode;
  route: "/" | "/stories";
  badgeCount?: string;
  showDot?: boolean;
}

const NAV_ITEMS: NavItemConfig[] = [
  {
    key: "map",
    icon: <LocationIcon size={25} color={colors.textPrimary} />,
    route: "/",
  },
  {
    key: "chat",
    icon: <ChatIcon size={25} color={colors.textPrimary} />,
    route: "/",
    badgeCount: "7",
  },
  {
    key: "camera",
    icon: <CameraIcon size={26} color={colors.textPrimary} />,
    route: "/",
  },
  {
    key: "friends",
    icon: <PeopleIcon size={25} color={colors.textPrimary} />,
    route: "/stories",
  },
  {
    key: "stories",
    icon: <PlayIcon size={25} color={colors.textPrimary} />,
    route: "/",
  },
];

export default function BottomNavigation({
  activeTab = "chat",
}: BottomNavigationProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {NAV_ITEMS.map((item) => {
        const isActive = item.key === activeTab;
        const isCamera = item.key === "camera";

        return (
          <Pressable
            key={item.key}
            style={styles.item}
            onPress={() => router.push(item.route)}
          >
            <View style={[styles.iconWrapper]}>
              {item.icon}
              {item.badgeCount ? (
                <Badge label={item.badgeCount} style={styles.badgePosition} />
              ) : null}
            </View>
            {isActive ? <View style={styles.activeDot} /> : null}
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
    justifyContent: "space-around",
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    backgroundColor: colors.bottomNavigation,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 48,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },

  badgePosition: {
    position: "absolute",
    top: -2,
    right: 2,
  },
  activeDot: {
    marginTop: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.textPrimary,
  },
});
