import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function GetItPromoBanner() {
  const router = useRouter();
const GETIT_IMAGE =
    "https://mobile.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggybankservice.appspot.com%2Fv5%2Fget-logo-icon.png&w=48&q=75";
 
  return (
    <View style={styles.card}>
      <Image
        style={styles.logo}
        src={GETIT_IMAGE}
      />

      <View style={styles.textBlock}>
        <Text style={styles.title}>Introducing GetIT!</Text>
        <Text style={styles.subtitle}>
          Save with discipline for what you want & get it delivered.
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.push("/get-it")}>
        <Text style={styles.buttonText}>EXPLORE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: spacing.lg,
    borderWidth: 1.5,
    borderColor: colors.orange,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
  },
  logo: {
    width: 50,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  textBlock: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 18,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 13,
  },
  button: {
    backgroundColor: colors.orange,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
  },
});
