import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { Movie } from "@/types";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PosterPlaceholder from "../common/PosterPlaceholder";

const CARD_WIDTH = 160;
const CARD_HEIGHT = 100;

interface ContinueWatchingCardProps {
  movie: Movie;
}

export default function ContinueWatchingCard({
  movie,
}: ContinueWatchingCardProps) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push("/detail")} style={styles.container}>
      <View>
        <PosterPlaceholder
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          color={movie.posterColor}
          colorAlt={movie.posterColorAlt}
          imageSource={movie.posterImage}
        />

        {movie.duration && (
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>{movie.duration}</Text>
          </View>
        )}

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${(movie.progress ?? 0) * 100}%` },
            ]}
          ></View>
        </View>
      </View>
      <Text style={typography.cardLabel} numberOfLines={1}>
        {movie.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
  },
  durationBadge: {
    position: "absolute",
    bottom: 10,
    left: spacing.sm,
    backgroundColor: colors.badgeBackground,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: colors.text,
    fontSize: 10,
    fontWeight: "600",
  },
  progressTrack: {
    position: "absolute",
    bottom: 4,
    left: spacing.sm,
    right: spacing.sm,
    height: 3,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.25)",
  },
  progressFill: {
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.text,
  },
});
