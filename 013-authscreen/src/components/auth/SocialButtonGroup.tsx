import SocialButton from "@/components/common/SocialButton";
import { spacing } from "@/constants/spacing";
import { socialMediaButton } from "@/data/socialButtons";
import { SocialButtonConfig, SocialProvider } from "@/types/auth";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import AuthFooterLink from "./AuthFooterLink";

interface SocialButtonGroupProps {
  isLogin: boolean;
  buttons?: SocialButtonConfig[];
  onSelect?: (provider: SocialProvider) => void;
}

export default function SocialButtonGroup({
  isLogin,
  buttons = socialMediaButton,
  onSelect,
}: SocialButtonGroupProps) {
  return (
    <View style={styles.group}>
      {buttons.map((button) => (
        <SocialButton
          key={button.provider}
          provider={button.provider}
          label={button.label}
          onPress={() => onSelect?.(button.provider)}
        />
      ))}
      {isLogin ? (
        <AuthFooterLink
          prompt="Need an account"
          actionLabel="Sign up"
          onPress={() => router.push("/signup")}
        />
      ) : (
        <AuthFooterLink
          prompt="Already have an account"
          actionLabel="Log in"
          onPress={() => router.push("/login")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    gap: spacing.md,
  },
});
