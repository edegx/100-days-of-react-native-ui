import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";

interface DealsBannerProps {
  title: string;
  description: string;
  ctaLabel: string;
  imageUri: string;
  onPress?: () => void;
}

export default function DealsBanner({
  title,
  description,
  ctaLabel,
  imageUri,
  onPress,
}: DealsBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{ctaLabel}</Text>
        </Pressable>
      </View>
      <Image
        source={require("../../../assets/images/food.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.cardBackground,
    borderRadius: radius.lg,
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    padding: spacing.lg,
    alignItems: "center",
    overflow: "hidden",
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 17,
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
    backgroundColor: colors.red,
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
    width: 90,
    height: 90,
    borderRadius: radius.md,
    marginLeft: spacing.sm,
  },
});
