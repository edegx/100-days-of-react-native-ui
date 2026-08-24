import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";

interface PromoBannerProps {
  title: string;
  description: string;
  ctaLabel: string;
  imageUri: string;
  onPress?: () => void;
}

export default function PromoBanner({
  title,
  description,
  ctaLabel,
  imageUri,
  onPress,
}: PromoBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{title}</Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{ctaLabel}</Text>
        </Pressable>
      </View>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.cardBackground,
    borderRadius: radius.lg,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    padding: spacing.lg,
    alignItems: "center",
    overflow: "hidden",
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.black,
  },
  description: {
    fontSize: 12,
    color: colors.mediumGray,
    marginTop: 4,
    lineHeight: 16,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: spacing.md,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.white,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: radius.md,
    marginLeft: spacing.sm,
  },
});
