import PosterPlaceholder from "@/components/common/PosterPlaceholder";
import { radius, spacing } from "@/constants/spacing";
import { Movie } from "@/types";
import { FlatList } from "react-native";
import SectionHeader from "../common/SectionHeader";

const CARD_WIDTH = 108;
const CARD_HEIGHT = 150;

interface RelatedSectionProps {
  movies: Movie[];
}

export default function RelatedSection({ movies }: RelatedSectionProps) {
  return (
    <>
      <SectionHeader title="Related" />
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
          gap: spacing.md,
          paddingBottom: spacing.xxl,
        }}
        renderItem={({ item }) => (
          <PosterPlaceholder
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            color={item.posterColor}
            colorAlt={item.posterColorAlt}
            borderRadius={radius.md}
            imageSource={item.posterImage}
          />
        )}
      />
    </>
  );
}
