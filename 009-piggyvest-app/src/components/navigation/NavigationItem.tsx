import { colors } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface NavigationItemProps {
  label: string;
  iconComponent?: any;
  iconName?: string;
  focused: boolean;
  badge?: string;
  isAccount?: boolean;
  onPress: () => void;
}

export default function NavigationItem({
  label,
  iconComponent: IconComponent,
  iconName,
  focused,
  badge,
  isAccount = false,
  onPress,
}: NavigationItemProps) {
  const color = focused ? colors.blue : colors.textMuted;
  const AVATAR_URI =
    "https://mobile.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggybankservice.appspot.com%2Fagent_pics%2Fthumb.logo1b451bc36d.jpeg&w=48&q=75";
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.iconWrapper}>
        {isAccount ? (
          <Image
            source={{
              uri: AVATAR_URI,
            }}
            style={[
              styles.avatar,
              { borderColor: focused ? colors.blue : "transparent" },
            ]}
          />
        ) : IconComponent ? (
          <IconComponent size={24} color={color} />
        ) : iconName ? (
          <Feather name={iconName as any} size={24} color={color} />
        ) : null}

        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </View>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  iconWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -12,
    backgroundColor: colors.orange,
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  badgeText: {
    fontSize: 8,
    fontWeight: "700",
    color: colors.white,
  },
  label: {
    fontSize: 10,
    fontWeight: "600",
  },
});
