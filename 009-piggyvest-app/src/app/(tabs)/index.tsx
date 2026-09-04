import FloatingActionButton from "@/components/common/FloatingActionButton";
import Screen from "@/components/common/Screen";
import GetItPromoBanner from "@/components/home/GetItPromoBanner";
import Header from "@/components/home/Header";
import HeroCarousel from "@/components/home/HeroCarousel";
import MediaContentSection from "@/components/home/MediaContentSection";
import PromoBanner from "@/components/home/PromoBanner";
import RecentActivities from "@/components/home/RecentActivities";
import SavingsPlansPreview from "@/components/home/SavingsPlansPreview";
import SuggestionsSection from "@/components/home/SuggestionsSection";
import VettedOpportunitiesSection from "@/components/invest/VettedOpportunitiesSection";
import { spacing } from "@/constants/spacing";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Header name="Ezekiel" message="We are 10 years old! 🥹🎉" />
        <HeroCarousel />

        <View style={{ marginTop: spacing.xxl }}>
          <PromoBanner imageUri="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/WAEC_3_aa7eda2d76/WAEC_3_aa7eda2d76.png" />
        </View>

        <View style={{ marginTop: spacing.xxxl }}>
          <SuggestionsSection />
        </View>

        <View style={{ marginTop: spacing.xxxl }}>
          <SavingsPlansPreview />
        </View>

        <View style={{ marginTop: spacing.xxl }}>
          <GetItPromoBanner />
        </View>

        <View style={{ marginTop: spacing.xxxl }}>
          <VettedOpportunitiesSection />
        </View>

        <View style={{ marginTop: spacing.xl }}>
          <MediaContentSection />
        </View>

        <RecentActivities />
      </ScrollView>

      <FloatingActionButton />
    </Screen>
  );
}
