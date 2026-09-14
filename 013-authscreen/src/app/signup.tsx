import AuthHeader from "@/components/auth/AuthHeader";
import SocialButtonGroup from "@/components/auth/SocialButtonGroup";
import AuthTextInput from "@/components/common/AuthTextInput";
import DividerLabel from "@/components/common/DividerLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import Screen from "@/components/common/Screen";
import { spacing } from "@/constants/spacing";
import { SocialProvider } from "@/types/auth";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Account created", "Your account was created (demo only).", [
        { text: "Continue to Login", onPress: () => router.replace("/login") },
      ]);
    }, 900);
  };

  const handleSocial = (provider: SocialProvider) => {
    Alert.alert("Account created", `Signed up with ${provider} (demo only).`);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.body}>
        <AuthHeader title="Sign up" />

        <View style={styles.form}>
          <AuthTextInput
            icon="person-outline"
            placeholder="Full name"
            autoCapitalize="words"
            value={name}
            onChangeText={setName}
          />
          <AuthTextInput
            icon="mail-outline"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <AuthTextInput
            icon="lock-closed-outline"
            placeholder="Password"
            isPassword
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <PrimaryButton
          label="Sign Up"
          onPress={handleSignup}
          loading={loading}
          style={styles.signupButton}
        />

        <DividerLabel label="or" />

        <SocialButtonGroup isLogin={false} onSelect={handleSocial} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: spacing.lg,
    paddingTop: 80,
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
  },
  form: {
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  signupButton: {
    marginTop: spacing.lg,
  },
});
