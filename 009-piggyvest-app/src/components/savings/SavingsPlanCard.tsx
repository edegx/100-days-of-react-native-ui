import { radius, spacing } from "@/constants/spacing";
import { SavingsPlan } from "@/types";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SavingsPlanCardProps {
  plan: SavingsPlan;
  onPress?: () => void;
  compact?: boolean;
}

const ICONS: Record<
  NonNullable<SavingsPlan["icon"]>,
  keyof typeof Feather.glyphMap
> = {
  wallet: "credit-card",
  lock: "lock",
  target: "target",
  house: "home",
  dollar: "dollar-sign",
  menu: "more-horizontal",
};

export default function SavingsPlanCard({
  plan,
  onPress,
  compact,
}: SavingsPlanCardProps) {
  const iconName = plan.icon ? ICONS[plan.icon] : "grid";

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        {
          borderColor: plan.borderColor,
          backgroundColor: plan.backgroundColor,
        },
        compact && styles.cardCompact,
      ]}
    >
      <View style={[styles.badge, { backgroundColor: plan.badgeColor }]}>
        <Text
          style={[styles.badgeText, { color: plan.badgeTextColor ?? "#fff" }]}
          numberOfLines={1}
        >
          {plan.badgeLabel}
        </Text>
      </View>

      <Feather
        name={iconName}
        size={72}
        color="rgba(255,255,255,0.06)"
        style={styles.watermark}
      />

      <View style={styles.textBlock}>
        <Text style={[styles.title, { color: plan.badgeColor ?? "#fff" }]}>
          {plan.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {plan.description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    minHeight: 120,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    padding: spacing.lg,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  cardCompact: {
    width: "48%",
    minHeight: 140,
  },
  badge: {
    alignSelf: "flex-end",
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "700",
  },
  watermark: {
    position: "absolute",
    right: -8,
    bottom: -8,
  },
  textBlock: {
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    fontSize: 13,
    color: "#FFFFFF",
    lineHeight: 18,
  },
});
