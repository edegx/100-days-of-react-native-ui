import { radii, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { banners } from "@/data/bannerData";
import React, { useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BANNER_WIDTH = SCREEN_WIDTH - spacing.lg * 2;

const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / BANNER_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        snapToInterval={BANNER_WIDTH}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollContent}
      >
        {banners.map((banner) => (
          <></>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: spacing.xl,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  container: {
    flexDirection: "row",
    borderRadius: radii.sm,
    padding: spacing.lg,
    gap: spacing.md,
    width: BANNER_WIDTH,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    ...typography.cardTitle,
    marginBottom: 4,
  },
  body: {
    ...typography.body,
    lineHeight: 20,
  },
});

export default Banner;
