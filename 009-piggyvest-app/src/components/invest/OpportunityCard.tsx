import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { VettedOpportunity } from "@/types";
import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface OpportunityCardProps {
  item: VettedOpportunity;
  onPress?: () => void;
}

export default function OpportunityCard({
  item,
  onPress,
}: OpportunityCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <View style={styles.card}>
        <Image source={{ uri: item.imageUri }} style={styles.backgroundImage} />

        <View style={styles.overlay}>
          <View style={[styles.badge, { backgroundColor: item.badgeColor }]}>
            <Text style={styles.badgeText} numberOfLines={1}>
              {item.badgeLabel}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.investorsRow}>
        <Text style={styles.investorsText}>INVESTORS: {item.investors}</Text>
        <Feather name="zap" size={12} color={colors.orangeLight} />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.returns}>{item.returnsLabel}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 180,
  },
  card: {
    width: 180,
    height: 180,
    borderRadius: radius.lg,
    overflow: "hidden",
    marginBottom: spacing.sm,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  overlay: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "space-between",
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: colors.white,
  },
  investorsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  investorsText: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 2,
  },
  returns: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
