import Screen from "@/components/common/Screen";
import ActionRow from "@/components/detail/ActionRow";
import DetailBanner from "@/components/detail/DetailBanner";
import DetailInfo from "@/components/detail/DetailInfo";
import ExpandableDescription from "@/components/detail/ExpandableDescription";
import PlayButton from "@/components/detail/PlayButton";
import RelatedSection from "@/components/detail/RelatedSection";
import TrendingSection from "@/components/home/TrendingSection";
import {
  featuredBanners as movies,
  relatedMovies,
  topTrending,
} from "@/data/movies";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Find the movie by id, fallback to first movie if not found
  const movie = useMemo(
    () => movies.find((m) => m.id === id) ?? movies[0],
    [id],
  );

  return (
    <Screen edges={["bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailBanner
          bannerColor={movie.posterColor}
          bannerColorAlt={movie.posterColorAlt}
          imageSource={movie.posterImage}
        />
        <DetailInfo
          title={movie.title}
          quality={movie.quality || ""}
          year={movie.year || ""}
          genre={movie.genre || ""}
          duration={movie.duration || ""}
          rating={movie.rating || ""}
        />
        <PlayButton label="Play Now" />
        <ExpandableDescription text={movie.description || ""} />
        <ActionRow />
        <RelatedSection movies={relatedMovies} />
        <TrendingSection
          title="Recommendation"
          ctaLabel="View All"
          movies={topTrending.toReversed()}
        />
      </ScrollView>
    </Screen>
  );
}
