import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";

interface AddressAlertBannerProps {
  message: string;
}

export default function AddressAlertBanner({
  message,
}: AddressAlertBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Image
          source={require("../../../assets/images/alert.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <Text style={styles.message}>{message}</Text>
      <Pressable
        onPress={() => setVisible(false)}
        hitSlop={8}
        style={styles.closeButton}
      >
        <Ionicons name="close" size={12} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.infoBackground,
    borderRadius: radius.md,
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
    padding: spacing.md,
    gap: spacing.sm,
  },
  iconWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20, // half of width/height for perfect circle
    backgroundColor: colors.white, // or any background color
  },
  message: {
    flex: 1,
    fontSize: 12,
    color: colors.darkGray,
    lineHeight: 16,
  },
  closeButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
