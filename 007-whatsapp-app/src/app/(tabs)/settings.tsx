import IconButton from "@/components/common/IconButton";
import Screen from "@/components/common/Screen";
import ProfileCard from "@/components/settings/ProfileCard";
import SettingsSection from "@/components/settings/SettingsSection";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { settingsSections } from "@/data/settings";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <Screen>
      <View style={styles.topRow}>
        <IconButton name="search" font="Ionicons" backgroundColor="#1c1c1c" />
        <IconButton name="qrcode" backgroundColor="#1c1c1c" />
      </View>
      <Text style={styles.title}>Settings</Text>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ProfileCard />
        {settingsSections.map((section) => (
          <SettingsSection key={section.id} section={section} />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  title: {
    ...typography.largeTitle,
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
  },
  scrollContent: {
    paddingBottom: 120,
  },
});
