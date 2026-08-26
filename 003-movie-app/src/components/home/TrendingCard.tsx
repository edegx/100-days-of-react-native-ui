import { radius } from "@/constants/spacing";
import { Movie } from "@/types";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import PosterPlaceholder from "../common/PosterPlaceholder";

const CARD_WIDTH = 108;
const CARD_HEIGHT = 150;

interface TrendingCardProps {
  movie: Movie;
}

export default function TrendingCard({ movie }: TrendingCardProps) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push("/detail")}>
      <PosterPlaceholder
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        color={movie.posterColor}
        colorAlt={movie.posterColorAlt}
        borderRadius={radius.md}
        imageSource={movie.posterImage}
      />
    </Pressable>
  );
}
