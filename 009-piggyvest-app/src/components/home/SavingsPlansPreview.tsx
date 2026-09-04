import SectionHeader from "@/components/common/SectionHeader";
import SavingsPlanCard from "@/components/savings/SavingsPlanCard";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { flexibleSavingsPlans } from "@/data/savingsPlans";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

export default function SavingsPlansPreview() {
  const router = useRouter();

  return (
    <>
      <SectionHeader
        title="My Savings Plans"
        linkLabel="View All"
        linkColor={colors.blueLight}
        onLinkPress={() => router.push("/savings")}
      />
      <FlatList
        data={flexibleSavingsPlans}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
          gap: spacing.md,
        }}
        renderItem={({ item }) => (
          <SavingsPlanCard
            plan={item}
            onPress={() => router.push("/savings")}
          />
        )}
      />
    </>
  );
}
