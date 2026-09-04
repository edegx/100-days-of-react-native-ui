import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Pill from "./Pill";
import { EyeIcon, EyeSlashIcon } from "./icons";

interface BalanceCardProps {
  backgroundColor: string;
  label: string;
  value: string;
  backgroundImageUri: string;
  leftPillLabel?: string;
  leftPillColor?: string;
  onLeftPillPress?: () => void;
  rightPillLabel: string;
  rightPillColor: string;
  rightPillTextColor?: string;
  onRightPillPress?: () => void;
}

export default function BalanceCard({
  backgroundColor,
  label,
  value,
  leftPillLabel,
  leftPillColor = colors.orange,
  onLeftPillPress,
  rightPillLabel,
  rightPillColor,
  rightPillTextColor,
  onRightPillPress,
  backgroundImageUri,
}: BalanceCardProps) {
  const [hidden, setHidden] = useState(false);

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Image
        source={{ uri: backgroundImageUri }}
        style={styles.backgroundImage}
      />

      <View style={styles.overlay}>
        <View style={styles.topRow}>
          {leftPillLabel ? (
            <Pill
              label={`${leftPillLabel}`}
              backgroundColor={leftPillColor}
              textColor="#171313"
              onPress={onLeftPillPress}
            />
          ) : (
            <View />
          )}

          <Pill
            label={rightPillLabel}
            backgroundColor={rightPillColor}
            textColor={rightPillTextColor ?? colors.white}
            onPress={onRightPillPress}
          />
        </View>

        <View style={styles.bottomBlock}>
          <Text style={[styles.label, { color: "rgba(255,255,255,0.85)" }]}>
            {label}
          </Text>
          <View style={styles.valueRow}>
            <Text style={styles.value} numberOfLines={1}>
              {hidden ? "₦ ••••••" : value}
            </Text>
            <Pressable
              onPress={() => setHidden((v) => !v)}
              hitSlop={10}
              style={styles.eyeButton}
            >
              {hidden ? (
                <EyeSlashIcon size={20} color="rgba(255,255,255,0.9)" />
              ) : (
                <EyeIcon size={20} color="rgba(255,255,255,0.9)" />
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    borderRadius: radius.xl,
    overflow: "hidden",
    minHeight: 150,
    height: 150,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: spacing.lg,
    justifyContent: "space-between",
    minHeight: 150,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    zIndex: 2,
  },
  bottomBlock: {
    marginTop: spacing.xxl,
    zIndex: 2,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: spacing.xs,
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  value: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.white,
  },
  eyeButton: {
    marginLeft: spacing.xs,
  },
  illustration: {
    position: "absolute",
    right: -10,
    bottom: -10,
    zIndex: 1,
  },
});
