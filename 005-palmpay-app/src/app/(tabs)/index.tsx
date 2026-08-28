import { useRouter } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import Screen from "@/components/common/Screen";
import BalanceCard from "@/components/home/BalanceCard";
import Header from "@/components/home/Header";
import PromoCardsRow from "@/components/home/PromoCardsRow";
import ServicesGrid from "@/components/home/ServicesGrid";
import TransactionCard from "@/components/home/TransactionCard";

import PromoSlider from "@/components/home/PromoSlider";
import QuickActions from "@/components/home/QuickActions";
import { recentTransactions } from "@/data/transactions";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Screen edges={["top"]}>
      <Header name="EDEGX" notificationCount={99} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <BalanceCard balance="5,003,800.95" />

        <QuickActions />
        {recentTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}

        <ServicesGrid
          onPressItem={(id) => id === "loan" && router.push("/(tabs)/loan")}
        />

        <PromoSlider
          onSlideChange={(index) => console.log("Slide changed to:", index)}
        />

        <PromoCardsRow
          onPressCard={(id) =>
            id === "cashbox" && router.push("/(tabs)/wealth")
          }
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
});
