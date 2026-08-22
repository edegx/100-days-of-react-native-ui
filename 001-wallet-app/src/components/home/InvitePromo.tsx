import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";

interface InvitePromoProps {
  title: string;
  onShare?: () => void;
}

export default function InvitePromo({ title, onShare }: InvitePromoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.shareButton} onPress={onShare}>
          <Text style={styles.shareText}>share invite</Text>
          <Ionicons name="chevron-forward" size={14} color={colors.white} />
        </Pressable>
      </View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=400&fit=crop",
        }}
        style={styles.coinsImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.xl,
    marginTop: spacing.xxl,
    backgroundColor: colors.promoBackground,
    borderRadius: radius.xl,
    height: 160,
    overflow: "hidden",
    justifyContent: "center",
  },
  textBlock: {
    paddingHorizontal: spacing.xl,
    maxWidth: "65%",
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
    color: colors.white,
    lineHeight: 26,
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: radius.pill,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginTop: spacing.lg,
    gap: 4,
  },
  shareText: {
    fontSize: 13,
    color: colors.white,
    fontWeight: "500",
  },
  coinsImage: {
    position: "absolute",
    right: -20,
    top: -10,
    width: 180,
    height: 180,
    opacity: 0.9,
  },
});
