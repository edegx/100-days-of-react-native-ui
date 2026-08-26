import Screen from "@/components/common/Screen";
import CategoryTabs from "@/components/home/CategoryTabs";
import ContinueWatchingSection from "@/components/home/ContinueWatchingSection";
import FeaturedCarousel from "@/components/home/FeaturedCarousel";
import Header from "@/components/home/Header";
import TrendingSection from "@/components/home/TrendingSection";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import { spacing } from "@/constants/spacing";
import {
  categoryTabs,
  continueWatching,
  featuredBanners,
  relatedMovies,
  topTrending,
} from "@/data/movies";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <Screen edges={["top"]}>
      <Header greeting="Hello" name="Edegx!" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedCarousel banners={featuredBanners} />

        <View style={{ marginTop: spacing.xl }}>
          <CategoryTabs tabs={categoryTabs} />
        </View>

        <View style={{ marginTop: spacing.xl }}>
          <ContinueWatchingSection movies={continueWatching} />
        </View>

        <View style={{ marginTop: spacing.xl, marginBottom: spacing.xl }}>
          <TrendingSection
            title="Top Trending"
            ctaLabel="View All"
            movies={topTrending}
          />
        </View>

        <View style={{ marginTop: spacing.xl, marginBottom: spacing.xl }}>
          <TrendingSection
            title="Recommended"
            ctaLabel="View All"
            movies={relatedMovies}
          />
        </View>
      </ScrollView>

      <BottomNavigation />
    </Screen>
  );
}
