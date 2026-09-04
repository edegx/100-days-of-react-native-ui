import BalanceCard from "@/components/common/BalanceCard";
import Screen from "@/components/common/Screen";
import TabHeader from "@/components/common/TabHeader";
import AppsIntegrationCard from "@/components/savings/AppsIntegrationCard";
import SavingsPlansGrid from "@/components/savings/SavingsPlansGrid";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { flexibleSavingsPlans, strictSavingsPlans } from "@/data/savingsPlans";
import { ScrollView, View } from "react-native";

export default function SavingsScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <TabHeader
          iconName="savings"
          iconColor={colors.blueLight}
          title="My Savings"
          subtitle="Save money securely & grow it."
        />

        <View style={{ marginBottom: spacing.xxl }}>
          <BalanceCard
            backgroundColor={colors.blue}
            label="Total Savings"
            value="₦20,741,017.00"
            leftPillLabel="Quick Save"
            rightPillLabel="Up to 22% returns"
            rightPillColor={colors.white}
            rightPillTextColor="#171313"
            backgroundImageUri="https://storage.googleapis.com/piggyvestwebsite/app/app-cards-piggybank.png"
          />
        </View>

        <SavingsPlansGrid
          title="Strict Savings Plans"
          plans={strictSavingsPlans}
        />
        <SavingsPlansGrid
          title="Flexible Savings Plans"
          plans={flexibleSavingsPlans}
        />

        <AppsIntegrationCard />
      </ScrollView>
    </Screen>
  );
}
