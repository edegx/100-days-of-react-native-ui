import { colors } from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";

interface AvatarProps {
  uri: string;
  size?: number;
  badge?: string;
}

export default function Avatar({ uri, size = 44, badge }: AvatarProps) {
  return (
    <View style={{ width: size, height: size }}>
      <Image
        source={{ uri }}
        style={[
          styles.image,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      />
      {badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.border,
  },
  badge: {
    position: "absolute",
    bottom: -2,
    alignSelf: "center",
    backgroundColor: colors.textMuted,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.white,
  },
  badgeText: {
    color: colors.white,
    fontSize: 8,
    fontWeight: "700",
  },
});
