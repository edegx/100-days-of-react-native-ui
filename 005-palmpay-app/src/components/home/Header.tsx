import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Svg, { G, Path } from "react-native-svg";
import Avatar from "../common/Avatar";
interface HeaderProps {
  name: string;
  notificationCount?: number;
  onPressSupport?: () => void;
  onPressNotifications?: () => void;
}

interface IconProps {
  color: string;
  size: number;
}
const PROFILE_IMAGE =
  "https://scontent-los4-1.cdninstagram.com/v/t51.2885-19/328790697_565200012334358_8811009323574588240_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-los4-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2gFI1yEvJmjbotatbXXoP224ZU1OiayOjF8d65YTMBNTcAhbovYbqO2XyxoPU5M8IdE&_nc_ohc=fnMpnOAdgRwQ7kNvwEGw-v3&_nc_gid=fMOWPTXXlIrz3Q7InFrKBQ&edm=AONqaaQBAAAA&ccb=7-5&oh=00_AQFBDazQfI8wVX2Jxoe81pf4ahHqkQ1Fh1117uiCshcrdw&oe=6A956858&_nc_sid=4e3341";
function Support({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 512 512">
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill={color}
        fill-rule="evenodd"
      >
        <G>
          <Path d="M379.734355,174.506667 C373.121022,106.666667 333.014355,-2.13162821e-14 209.067688,-2.13162821e-14 C85.1210217,-2.13162821e-14 45.014355,106.666667 38.4010217,174.506667 C15.2012632,183.311569 -0.101643453,205.585799 0.000508304259,230.4 L0.000508304259,260.266667 C0.000508304259,293.256475 26.7445463,320 59.734355,320 C92.7241638,320 119.467688,293.256475 119.467688,260.266667 L119.467688,230.4 C119.360431,206.121456 104.619564,184.304973 82.134355,175.146667 C86.4010217,135.893333 107.307688,42.6666667 209.067688,42.6666667 C310.827688,42.6666667 331.521022,135.893333 335.787688,175.146667 C313.347976,184.324806 298.68156,206.155851 298.667688,230.4 L298.667688,260.266667 C298.760356,283.199651 311.928618,304.070103 332.587688,314.026667 C323.627688,330.88 300.801022,353.706667 244.694355,360.533333 C233.478863,343.50282 211.780225,336.789048 192.906491,344.509658 C174.032757,352.230268 163.260418,372.226826 167.196286,392.235189 C171.132153,412.243552 188.675885,426.666667 209.067688,426.666667 C225.181549,426.577424 239.870491,417.417465 247.041022,402.986667 C338.561022,392.533333 367.787688,345.386667 376.961022,317.653333 C401.778455,309.61433 418.468885,286.351502 418.134355,260.266667 L418.134355,230.4 C418.23702,205.585799 402.934114,183.311569 379.734355,174.506667 Z M76.8010217,260.266667 C76.8010217,269.692326 69.1600148,277.333333 59.734355,277.333333 C50.3086953,277.333333 42.6676884,269.692326 42.6676884,260.266667 L42.6676884,230.4 C42.6676884,224.302667 45.9205765,218.668499 51.2010216,215.619833 C56.4814667,212.571166 62.9872434,212.571166 68.2676885,215.619833 C73.5481336,218.668499 76.8010217,224.302667 76.8010217,230.4 L76.8010217,260.266667 Z M341.334355,230.4 C341.334355,220.97434 348.975362,213.333333 358.401022,213.333333 C367.826681,213.333333 375.467688,220.97434 375.467688,230.4 L375.467688,260.266667 C375.467688,269.692326 367.826681,277.333333 358.401022,277.333333 C348.975362,277.333333 341.334355,269.692326 341.334355,260.266667 L341.334355,230.4 Z" />
        </G>
      </G>
    </Svg>
  );
}

export default function Header({
  name,
  notificationCount = 0,
  onPressSupport,
  onPressNotifications,
}: HeaderProps) {
  const hasOverflow = notificationCount > 99;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar
          size={44}
          source={{
            uri: PROFILE_IMAGE,
          }}
        />
        <Text style={styles.greeting}>
          Hi, <Text style={styles.name}>{name}</Text>
        </Text>
      </View>

      <View style={styles.left}>
        <Pressable
          onPress={onPressSupport}
          hitSlop={10}
          style={styles.iconButton}
        >
          <Support size={26} color={colors.white} />
        </Pressable>
        <Pressable
          onPress={onPressSupport}
          hitSlop={10}
          style={styles.iconButton}
        >
          <Ionicons
            name="notifications-outline"
            size={26}
            color={colors.white}
          />

          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {hasOverflow ? "99+" : notificationCount}
              </Text>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
  },
  name: {
    fontWeight: "700",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
  iconButton: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "#E93B3B",
    borderRadius: 9,
    minWidth: 18,
    height: 18,
    paddingHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "700",
  },
});
