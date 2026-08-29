import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface InfoCardProps {
  emoji: string;
  iconBackground: string;
  title: string;
  descriptionPrefix?: string;
  highlightedText?: string;
  boldText?: string;
  onPress?: () => void;
}

export default function InfoCard({
  emoji,
  iconBackground,
  title,
  descriptionPrefix,
  highlightedText,
  boldText,
  onPress,
}: InfoCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={[styles.iconTile, { backgroundColor: iconBackground }]}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <View style={styles.textColumn}>
        <Text style={styles.title}>{title}</Text>
        {boldText ? (
          <Text style={styles.boldText}>{boldText}</Text>
        ) : (
          <Text style={styles.description}>
            {descriptionPrefix}
            {highlightedText ? (
              <Text style={styles.highlight}>{highlightedText} </Text>
            ) : null}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.serviceTile,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  iconTile: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.lg,
  },
  emoji: {
    fontSize: 22,
  },
  textColumn: {
    flex: 1,
  },
  title: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  description: {
    color: colors.textPrimary,
    fontSize: 15,
    lineHeight: 21,
  },
  highlight: {
    color: colors.green,
  },
  boldText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
});
