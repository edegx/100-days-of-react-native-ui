import Screen from "@/components/common/Screen";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import PayGridSection from "@/components/pay/PayGridSection";
import PayHeader from "@/components/pay/PayHeader";
import PaySearchBar from "@/components/pay/PaySearchBar";
import { cardlessPaymentsData } from "@/data/cardlessPaymentsData";
import { essentialsData } from "@/data/essentialsData";
import { lifestyleData } from "@/data/lifestyleData";
import { ScrollView, StyleSheet } from "react-native";

export default function Pay() {
  return (
    <Screen>
      <PayHeader />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <PaySearchBar />
        <PayGridSection title="Essentials" data={essentialsData} />
        <PayGridSection title="Cardless Payments" data={cardlessPaymentsData} />
        <PayGridSection title="Lifestyle" data={lifestyleData} />
      </ScrollView>
      <BottomNavigation />
    </Screen>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 120,
  },
});
