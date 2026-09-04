import { radius, spacing } from "@/constants/spacing";
import { Image, StyleSheet, View } from "react-native";

interface PromoBannerProps {
  imageUri: string;
  onPress?: () => void;
}

export default function PromoBanner({ imageUri, onPress }: PromoBannerProps) {
  return (
    <View>
      <Image style={styles.card} source={{ uri: imageUri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    borderRadius: radius.xl,
    height: 120,
  },
});
