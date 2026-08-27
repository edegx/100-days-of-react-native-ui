import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { PromoCard } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PromoCardTileProps {
  card: PromoCard;
  onPress?: () => void;
}

export default function PromoCardTile({ card, onPress }: PromoCardTileProps) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.subtitle} numberOfLines={2}>
        {card.subtitle}
      </Text>

      <View style={styles.valueRow}>
        <Text style={styles.value}>
          {card.value}
          {card.valueSuffix}
        </Text>
      </View>

      {card.footnote && <Text style={styles.footnote}>{card.footnote}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    minHeight: 150,
    justifyContent: "flex-start",
  },
  title: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12.5,
    lineHeight: 17,
  },
  valueRow: {
    marginTop: spacing.lg,
  },
  value: {
    color: colors.green,
    fontSize: 22,
    fontWeight: "700",
  },
  footnote: {
    color: colors.textMuted,
    fontSize: 11,
    marginTop: spacing.xs,
  },
});
