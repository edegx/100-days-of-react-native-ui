import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PromoSectionProps {
  sectionTitle: string;
  heading: string;
  description: string;
  ctaLabel: string;
  onCtaPress?: () => void;
}

export default function PromoSection({
  sectionTitle,
  heading,
  description,
  ctaLabel,
  onCtaPress,
}: PromoSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <View style={styles.card}>
        <View style={styles.textColumn}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onCtaPress}>
            <Text style={styles.cta}>{ctaLabel}</Text>
          </Pressable>
        </View>

        <View style={styles.imagePlaceholder}>
          <Ionicons name="image-outline" size={22} color={colors.textMuted} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: spacing.lg,
  },
  card: {
    flexDirection: "row",
    backgroundColor: colors.promoBackground,
    borderRadius: radius.lg,
    padding: spacing.xl,
    justifyContent: "space-between",
  },
  textColumn: {
    flex: 1,
    paddingRight: spacing.md,
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: spacing.md,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.lg,
  },
  cta: {
    color: colors.accentYellow,
    fontSize: 15,
    fontWeight: "700",
  },
  imagePlaceholder: {
    width: 48,
    height: 48,
    borderRadius: radius.sm,
    backgroundColor: colors.serviceTile,
    alignItems: "center",
    justifyContent: "center",
  },
});
