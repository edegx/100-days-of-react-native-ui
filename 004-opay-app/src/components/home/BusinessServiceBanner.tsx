import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type BusinessServiceBannerProps = {
  balanceVisible: boolean;
};

export default function BusinessServiceBanner({
  balanceVisible,
}: BusinessServiceBannerProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconCircle}>
        <MaterialCommunityIcons
          name="storefront-outline"
          size={16}
          color={colors.primary}
        />
      </View>
      <Text style={styles.text}>
        Business Service - Today&apos;s Sales:{" "}
        <Text style={styles.strikeAmount}>
          {balanceVisible ? "₦230,423.78" : "***"}
        </Text>
      </Text>
      <View style={styles.chevronCircle}>
        <Ionicons name="chevron-forward" size={14} color={colors.primary} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.primaryDeep,
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    marginBottom: spacing.lg,
  },
  iconCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  text: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "400",
  },
  strikeAmount: {
    color: colors.primary,
  },
  chevronCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
});
