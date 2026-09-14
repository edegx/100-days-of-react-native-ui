import AuthFooterLink from "@/components/auth/AuthFooterLink";
import SocialButtonGroup from "@/components/auth/SocialButtonGroup";
import Screen from "@/components/common/Screen";
import OnboardingCopy from "@/components/onboarding/OnboardingCopy";
import OnboardingIllustration from "@/components/onboarding/OnboardingIllustration";
import ProgressBar from "@/components/onboarding/ProgressBar";
import { spacing } from "@/constants/spacing";
import { SocialProvider } from "@/types/auth";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function OnboardingScreen() {
  const handleSelectProvider = (_provider: SocialProvider) => {
    // Fake account creation — move straight to Login.
    router.push("/login");
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.hero}>
        <OnboardingIllustration />
      </View>

      <OnboardingCopy
        title="Private Coaching"
        subtitle={
          "Add one-on-one, confidential sessions for only\n$35 per session"
        }
      />

      <ProgressBar totalSteps={3} currentStep={2} />

      <View style={styles.actions}>
        <SocialButtonGroup isLogin={true} onSelect={handleSelectProvider} />
        <AuthFooterLink
          prompt="Already have an account?"
          actionLabel="Log in"
          onPress={() => router.push("/login")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  hero: {
    alignItems: "center",
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  actions: {
    marginTop: spacing.xl,
    gap: spacing.lg,
    paddingBottom: spacing.md,
  },
});
