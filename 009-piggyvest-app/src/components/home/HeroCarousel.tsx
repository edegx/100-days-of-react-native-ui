import BalanceCard from "@/components/common/BalanceCard";
import PaginationDots from "@/components/common/PaginationDots";
import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const SLIDE_WIDTH = width;

export default function HeroCarousel() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SLIDE_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={{ width: SLIDE_WIDTH }}>
          <BalanceCard
            backgroundColor={colors.blue}
            label="My Savings"
            value="₦20,741,017.00"
            leftPillLabel="+ Quick Save"
            onLeftPillPress={() => router.push("/savings")}
            rightPillLabel="View Savings →"
            rightPillColor={colors.black}
            onRightPillPress={() => router.push("/savings")}
            backgroundImageUri="https://storage.googleapis.com/piggyvestwebsite/app/app-cards-piggybank.png"
          />
        </View>

        <View style={{ width: SLIDE_WIDTH }}>
          <BalanceCard
            backgroundColor="#6f1ed5"
            label="My Investments"
            value="₦60,741,017.00"
            leftPillLabel="10% - 35% returns"
            onLeftPillPress={() => router.push("/savings")}
            rightPillLabel="View All →"
            leftPillColor={colors.white}
            rightPillColor={colors.black}
            onRightPillPress={() => router.push("/savings")}
            backgroundImageUri="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/Investify_Card_2dd800c22b/Investify_Card_2dd800c22b.png"
          />
        </View>
      </ScrollView>

      <PaginationDots count={2} activeIndex={activeIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  secondaryCard: {
    marginHorizontal: spacing.lg,
    borderRadius: radius.xl,
    minHeight: 190,
    backgroundColor: colors.backgroundElevated,
    padding: spacing.lg,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white,
    marginBottom: spacing.sm,
  },
  secondarySubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
