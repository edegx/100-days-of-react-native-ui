import { radius, spacing } from "@/constants/spacing";
import { PromoCard as PromoCardType } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PromoCardProps {
  card: PromoCardType;
}

export default function PromoCard({ card }: PromoCardProps) {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: card.backgroundColor }]}
    >
      <View style={styles.iconArea}>
        {card.iconType === "whatsapp" ? (
          <View style={styles.whatsappBadge}>
            <Ionicons name="logo-whatsapp" size={26} color="#25D366" />{" "}
          </View>
        ) : card.iconType === "emoji" ? (
          <Text style={styles.emoji}>{card.emoji}</Text>
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
      </View>

      <Text style={[styles.title, { color: card.textColor }]} numberOfLines={3}>
        {card.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 152,
    height: 150,
    borderRadius: radius.lg,
    padding: spacing.md,
    justifyContent: "space-between",
  },
  iconArea: {
    height: 46,
  },
  imagePlaceholder: {
    width: "100%",
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  emoji: {
    fontSize: 36,
  },
  whatsappBadge: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
  },
});
