import Screen from "@/components/common/Screen";
import AssetOfferingsGrid from "@/components/invest/AssetOfferingsGrid";
import FilterChips from "@/components/invest/FilterChips";
import PersonalizedBanner from "@/components/invest/PersonalizedBanner";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { FilterOption } from "@/types";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function InvestScreen() {
  const [filter, setFilter] = useState<FilterOption>("all");

  return (
    <Screen>
      <Text style={styles.title}>Assets</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <FilterChips selected={filter} onSelect={setFilter} />
        <PersonalizedBanner />
        <Text style={styles.sectionTitle}>All assets Offerings</Text>
        <AssetOfferingsGrid selected={filter} />
      </ScrollView>
      <BottomNavigation />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    paddingVertical: spacing.lg,
  },
  content: {
    paddingBottom: spacing.xxxl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
});
