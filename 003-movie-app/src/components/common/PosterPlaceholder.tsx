import { radius } from "@/constants/spacing";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

interface PosterPlaceholderProps {
  width: number;
  height: number;
  color: string;
  colorAlt?: string;
  label?: string;
  borderRadius?: number;
  style?: ViewStyle;
  imageSource?: ImageSourcePropType; // Added image support
  imageStyle?: ImageStyle; // Additional style for image
}

/**
 * Visual stand-in for movie poster artwork.
 * Real poster images are copyrighted, so this renders a
 * gradient-like colored block sized to match the original layout.
 */
export default function PosterPlaceholder({
  width,
  height,
  color,
  colorAlt,
  label,
  borderRadius = radius.md,
  style,
  imageSource,
  imageStyle,
}: PosterPlaceholderProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          backgroundColor: color,
          borderRadius,
        },
        style,
      ]}
    >
      {imageSource && (
        <Image
          source={imageSource}
          style={[
            styles.image,
            {
              width,
              height,
              borderRadius,
            },
            imageStyle,
          ]}
          resizeMode="cover"
        />
      )}

      {colorAlt && !imageSource && (
        <View
          style={[styles.overlay, { backgroundColor: colorAlt, borderRadius }]}
        />
      )}

      {/* Label - shown if no image */}
      {label && !imageSource ? (
        <Text style={styles.label} numberOfLines={1}>
          {label}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "55%",
    opacity: 0.85,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  label: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
