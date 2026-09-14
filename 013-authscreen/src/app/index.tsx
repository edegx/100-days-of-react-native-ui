import SocialButtonGroup from "@/components/auth/SocialButtonGroup";
import Screen from "@/components/common/Screen";
import OnboardingCopy from "@/components/onboarding/OnboardingCopy";
import ProgressBar from "@/components/onboarding/ProgressBar";
import { spacing } from "@/constants/spacing";
import { SocialProvider } from "@/types/auth";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Swap these for your real asset imports, e.g. require("@/assets/image1.png")
const image1 = require("@/assets/images/image2.png");
const image2 = require("@/assets/images/image1.png");
const image3 = require("@/assets/images/image3.png");

const SLIDES = [
  {
    image: image1,
    title: "Private Coaching",
    subtitle: "Add one-on-one, confidential sessions for only\n$35 per session",
  },
  {
    image: image2,
    title: "Track Your Progress",
    subtitle:
      "See your growth over time with personal\ninsights and milestones",
  },
  {
    image: image3,
    title: "Get Started",
    subtitle: "Create your account and begin your\njourney today",
  },
];

const AUTO_ADVANCE_MS = 4000;

export default function WelcomeScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isUserInteracting = useRef(false);

  useEffect(() => {
    const scheduleNext = () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = setTimeout(() => {
        if (isUserInteracting.current) return;
        const next = (currentStep + 1) % SLIDES.length;
        scrollRef.current?.scrollTo({ x: next * SCREEN_WIDTH, animated: true });
        setCurrentStep(next);
      }, AUTO_ADVANCE_MS);
    };

    scheduleNext();
    return () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    };
  }, [currentStep]);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    if (index !== currentStep) setCurrentStep(index);
  };

  const handleSelectProvider = (_provider: SocialProvider) => {
    router.push("/login");
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        onScrollBeginDrag={() => {
          isUserInteracting.current = true;
          if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
        }}
        onMomentumScrollEnd={() => {
          isUserInteracting.current = false;
        }}
        style={styles.pager}
      >
        {SLIDES.map((slide, i) => (
          <View key={i} style={[styles.slide, { width: SCREEN_WIDTH }]}>
            <Image
              source={slide.image}
              style={styles.image}
              resizeMode="contain"
            />
            <OnboardingCopy title={slide.title} subtitle={slide.subtitle} />
          </View>
        ))}
      </ScrollView>

      <View style={{ marginHorizontal: 48, marginTop: spacing.lg }}>
        <ProgressBar totalSteps={SLIDES.length} currentStep={currentStep + 1} />
      </View>

      <View style={styles.actions}>
        <SocialButtonGroup isLogin={false} onSelect={handleSelectProvider} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 80,
    justifyContent: "flex-start", // was "space-between"
  },
  pager: {
    flexGrow: 0,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: spacing.lg,
  },
  image: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6,
  },
  actions: {
    gap: spacing.lg,
    marginTop: spacing.lg + 32, // was spacing.lg — this closes the progress-bar-to-buttons gap
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.lg,
  },
});
