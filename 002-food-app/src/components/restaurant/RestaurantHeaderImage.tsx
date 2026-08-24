import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import IconButton from "@/components/common/IconButton";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

interface RestaurantHeaderImageProps {
  coverImageUri: string;
  logoUri: string;
}

export default function RestaurantHeaderImage({
  coverImageUri,
  logoUri,
}: RestaurantHeaderImageProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={{ uri: coverImageUri }} style={styles.coverImage} />
      <SafeAreaView edges={["top"]} style={styles.controlsRow}>
        <IconButton
          iconName="chevron-back"
          onPress={() => router.back()}
          style={styles.shadow}
        />
        <View style={styles.rightControls}>
          <IconButton iconName="heart-outline" style={styles.shadow} />
          <IconButton iconName="share-outline" style={styles.shadow} />
        </View>
      </SafeAreaView>
      <View style={styles.logoWrap}>
        <Image
          source={{ uri: logoUri }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.chipBackground,
  },
  controlsRow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  rightControls: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  logoWrap: {
    position: "absolute",
    bottom: -28,
    left: spacing.lg,
    width: 64,
    borderRadius: 32,
    height: 64,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    overflow: "hidden", // ← ADD THIS
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 32,
  },
});
