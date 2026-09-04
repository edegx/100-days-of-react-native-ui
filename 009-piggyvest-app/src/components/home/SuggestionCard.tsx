import { radius } from "@/constants/spacing";
import { SuggestionItem } from "@/types";
import { Image, Pressable, StyleSheet } from "react-native";

interface SuggestionCardProps {
  item: SuggestionItem;
  onPress?: () => void;
}

export default function SuggestionCard({ item, onPress }: SuggestionCardProps) {
  return (
    <Pressable style={[styles.card, {}]} onPress={onPress}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
  },

  image: {
    width: 300,
    height: "100%",
    resizeMode: "cover",
    borderRadius: radius.lg,
  },
});
