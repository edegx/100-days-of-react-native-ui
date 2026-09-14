import AuthHeader from "@/components/auth/AuthHeader";
import SocialButtonGroup from "@/components/auth/SocialButtonGroup";
import AuthTextInput from "@/components/common/AuthTextInput";
import DividerLabel from "@/components/common/DividerLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import Screen from "@/components/common/Screen";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { SocialProvider } from "@/types/auth";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Welcome back", "Logged in successfully (demo only).");
    }, 900);
  };

  const handleSocial = (provider: SocialProvider) => {
    Alert.alert("Logged in", `Continued with ${provider} (demo only).`);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.body}>
        <AuthHeader title="Login" />

        <View style={styles.form}>
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

        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        <PrimaryButton
          label="Login"
          onPress={handleLogin}
          loading={loading}
          style={styles.loginButton}
        />

        <DividerLabel label="or" />

        <SocialButtonGroup isLogin={true} onSelect={handleSocial} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: spacing.lg,
    paddingTop: 100,
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
  },
  form: {
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  forgotPassword: {
    textAlign: "center",
    fontSize: 13,
    color: colors.textHeading,
    textDecorationLine: "underline",
    marginTop: spacing.lg,
  },
  loginButton: {
    marginTop: spacing.lg,
  },
});
