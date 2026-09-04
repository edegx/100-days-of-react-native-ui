import Screen from "@/components/common/Screen";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AccountScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.centerWrapper}>
          <Text style={styles.title}>ACCOUNT</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  centerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    color: colors.textSecondary,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
});
