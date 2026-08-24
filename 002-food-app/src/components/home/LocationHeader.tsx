import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";

interface LocationHeaderProps {
  label: string;
  address: string;
  onMenuPress?: () => void;
  onBellPress?: () => void;
}
export default function LocationHeader({
  label,
  address,
  onMenuPress,
  onBellPress,
}: LocationHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onMenuPress} hitSlop={8}>
        <View style={styles.iconWrapper}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.icon}
          />
        </View>
      </Pressable>
      <View style={styles.centerBlock}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.addressRow}>
          <Image
            source={require("../../../assets/images/location.png")}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styles.address}>{address}</Text>
          <Ionicons name="chevron-down" size={14} color={colors.black} />
        </View>
      </View>

      <Pressable onPress={onBellPress} hitSlop={8}>
        <View style={styles.iconWrapper}>
          <Image
            source={require("../../../assets/images/notification.png")}
            style={styles.icon}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  centerBlock: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: colors.mediumGray,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 2,
  },
  address: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.black,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20, // half of width/height for perfect circle
    backgroundColor: colors.cardBackground, // or any background color
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 18,
    height: 18,
  },
});
