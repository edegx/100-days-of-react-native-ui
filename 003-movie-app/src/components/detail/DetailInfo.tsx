import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface DetailInfoProps {
  title: string;
  quality: string;
  year: string;
  genre: string;
  duration: string;
  rating: string;
}

export default function DetailInfo({
  title,
  quality,
  year,
  genre,
  duration,
  rating,
}: DetailInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={typography.detailTitle}>{title}</Text>
        <View style={styles.qualityBadge}>
          <Text style={styles.qualityText}>{quality}</Text>
        </View>
      </View>

      <View style={styles.metaRow}>
        <Text style={typography.metaText}>{year}</Text>
        <Ionicons
          name="play"
          size={10}
          color={colors.textSecondary}
          style={styles.metaIcon}
        />

        <Text style={typography.metaText}>{genre}</Text>
        <Text style={styles.divider}>|</Text>
        <Ionicons
          name="time-outline"
          size={10}
          color={colors.textSecondary}
          style={styles.metaIcon}
        />

        <Text style={typography.metaText}>{duration}</Text>
        <Text style={styles.divider}>|</Text>
        <Ionicons
          name="star"
          size={10}
          color="#F5C518"
          style={styles.metaIcon}
        />
        <Text style={typography.metaText}>{rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  qualityBadge: {
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
  },
  qualityText: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "600",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.sm,
  },
  metaIcon: {
    marginHorizontal: 4,
  },
  divider: {
    color: colors.border,
    marginHorizontal: spacing.sm,
  },
});
