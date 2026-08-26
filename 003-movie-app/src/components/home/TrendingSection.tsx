import TrendingCard from "@/components/home/TrendingCard";
import { spacing } from "@/constants/spacing";
import { Movie } from "@/types";
import { FlatList } from "react-native";
import SectionHeader from "../common/SectionHeader";

interface TrendingSectionProps {
  title: string;
  ctaLabel: string;
  movies: Movie[];
}

export default function TrendingSection({
  title,
  ctaLabel,
  movies,
}: TrendingSectionProps) {
  return (
    <>
      <SectionHeader title={title} />
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
          gap: spacing.md,
        }}
        renderItem={({ item }) => <TrendingCard movie={item} />}
      />
    </>
  );
}
