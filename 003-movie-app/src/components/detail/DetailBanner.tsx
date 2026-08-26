import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import IconButton from "../common/IconButton";
import PosterPlaceholder from "../common/PosterPlaceholder";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BANNER_HEIGHT = 340;

interface DetailBannerProps {
  bannerColor: string;
  bannerColorAlt?: string;
  imageSource?: ImageSourcePropType;
}

export default function DetailBanner({
  bannerColor,
  imageSource,
  bannerColorAlt,
}: DetailBannerProps) {
  const router = useRouter();

  return (
    <View style={{ width: SCREEN_WIDTH, height: BANNER_HEIGHT }}>
      <PosterPlaceholder
        width={SCREEN_WIDTH}
        height={BANNER_HEIGHT}
        color={bannerColor}
        colorAlt={bannerColorAlt}
        borderRadius={0}
        imageSource={imageSource}
      />
      <View style={styles.topRow}>
        <IconButton
          onPress={() => router.back()}
          backgroundColor="rgba(0,0,0,0.35)"
          size={38}
        >
          <Ionicons name="arrow-back" size={20} color={colors.text} />
        </IconButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    position: "absolute",
    top: 50,
    left: spacing.lg,
  },
});
