import PosterPlaceholder from "@/components/common/PosterPlaceholder";
import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Movie } from "@/types";
import { router, useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = SCREEN_WIDTH * 0.72;
const CARD_HEIGHT = 170;
const CARD_HEIGHT_ACTIVE = CARD_HEIGHT + 20; // Center card is 10px taller
const SIDE_PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2;
const CARD_SPACING = spacing.md;

interface FeaturedCarouselProps {
  banners: Movie[];
}

export default function FeaturedCarousel({ banners }: FeaturedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const index = Math.round(x / (CARD_WIDTH + CARD_SPACING));
    setActiveIndex(index);
  };

  return (
    <View>
      <View style={{ height: CARD_HEIGHT_ACTIVE, justifyContent: "center" }}>
        <ScrollableRow
          banners={banners}
          activeIndex={activeIndex}
          onScroll={handleScroll}
        />
      </View>
      <View style={styles.dotsRow}>
        {banners.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeIndex ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

function ScrollableRow({
  banners,
  activeIndex,
  onScroll,
}: {
  banners: Movie[];
  activeIndex: number;
  onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
}) {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + CARD_SPACING}
      decelerationRate="fast"
      contentContainerStyle={{
        paddingHorizontal: SIDE_PADDING,
        alignItems: "center", // Center all cards vertically
      }}
      onMomentumScrollEnd={onScroll}
    >
      {banners.map((banner, index) => {
        const isActive = index === activeIndex;
        const cardHeight = isActive ? CARD_HEIGHT_ACTIVE : CARD_HEIGHT;

        return (
          <Pressable
            key={banner.id}
            onPress={() => router.push(`/movie/${banner.id}`)}
            style={{
              width: CARD_WIDTH,
              height: cardHeight,
              marginRight: index === banners.length - 1 ? 0 : CARD_SPACING,
            }}
          >
            <PosterPlaceholder
              width={CARD_WIDTH}
              height={cardHeight}
              color={banner.posterColor}
              colorAlt={banner.posterColorAlt}
              label={banner.title}
              borderRadius={radius.lg}
              imageSource={banner.posterImage}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.md,
    gap: 6,
  },
  dot: {
    height: 4,
    borderRadius: 2,
  },
  dotActive: {
    width: 16,
    backgroundColor: colors.text,
  },
  dotInactive: {
    width: 4,
    backgroundColor: colors.dotInactive,
  },
});
