import { colors } from "@/constants/colors";
import { imageMap } from "@/constants/imageMap";
import { radius, spacing } from "@/constants/spacing";
import { QuickAction } from "@/types";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface QuickActionItemProps {
  quickAction: QuickAction;
  onPress?: () => void;
}

export default function QuickActionItem({
  quickAction,
  onPress,
}: QuickActionItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={imageMap[quickAction.icon]}
          style={{
            width: 20,
            height: 20,
            resizeMode: "contain",
          }}
        />
      </View>
      <Text style={styles.title}>{quickAction.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: spacing.lg,
    borderRadius: radius.lg,
    marginRight: spacing.md,
    elevation: 1,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24, // Half of width/height to make it a perfect circle
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border, // or whatever color you want for the border
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 11.5,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});
