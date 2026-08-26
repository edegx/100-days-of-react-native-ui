import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Screen from "@/components/common/Screen";
import BalanceCard from "@/components/home/BalanceCard";
import BusinessServiceBanner from "@/components/home/BusinessServiceBanner";
import Header from "@/components/home/Header";
import PromoBanner from "@/components/home/PromoBanner";
import QuickActionsGrid from "@/components/home/QuickActionsGrid";
import TransactionsCard from "@/components/home/TransactionsCard";
import TransferActionsRow from "@/components/home/TransferActionsRow";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { transactions } from "@/data/transactions";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Index() {
  const [balanceVisible, setBalanceVisible] = useState(false);

  return (
    <Screen>
      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <BalanceCard
            accountBalance={"2,853,239.00"}
            balanceVisible={balanceVisible}
            onToggleVisibility={() => setBalanceVisible((prev) => !prev)}
          />
          <BusinessServiceBanner balanceVisible={balanceVisible} />
        </View>

        {balanceVisible && <TransactionsCard transactions={transactions} />}

        <TransferActionsRow />
        <QuickActionsGrid />

        <PromoBanner
          eyebrow="OPay 7 Savings Festival"
          bgColor="#0e2724"
          icon={
            <MaterialCommunityIcons
              name="cash-multiple"
              size={30}
              color={colors.primary}
            />
          }
          title="Earn 27% p.a. Now!"
          description="Create a Target, earn 27% p.a. & invite friends to earn up to ₦5M!"
        />

        <PromoBanner
          bgColor="#2c2c2c"
          icon={
            <Ionicons name="people-circle" size={30} color={colors.primary} />
          }
          title="Share Opay with Others"
          description="Help a loved one get their own account in minutes"
        />
      </ScrollView>

      <BottomNavigation />
    </Screen>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
});
