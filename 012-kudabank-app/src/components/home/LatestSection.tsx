import { colors } from "@/constants/colors";
import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const PROMO_IMAGE_URI =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80";

const LatestSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Latest</Text>
      <Pressable style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: PROMO_IMAGE_URI }} style={styles.image} />
        </View>
        <View style={styles.captionWrapper}>
          <Text style={styles.caption} numberOfLines={2}>
            Meet the new kuda app, build for more
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
    marginBottom: spacing.xxl,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  card: {
    width: "33%",
    backgroundColor: colors.surface,
    borderRadius: radii.sm,
  },
  imageWrapper: {
    borderRadius: radii.md,
    overflow: "hidden",
  },
  image: {
    height: 130,
    width: "100%",
  },
  captionWrapper: {
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.sm,
  },
  caption: {
    ...typography.cardTitle,
    fontSize: 13,
    color: colors.textPrimary,
    marginTop: spacing.sm,
    lineHeight: 18,
  },
});

export default LatestSection;
