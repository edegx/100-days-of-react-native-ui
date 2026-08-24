import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

import AddressCard from "@/components/checkout/AddressCard";
import CheckoutFooter from "@/components/checkout/CheckoutFooter";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import DeliveryMap from "@/components/checkout/DeliveryMap";
import DeliveryOptionsRow from "@/components/checkout/DeliveryOptionsRow";
import InfoRow from "@/components/checkout/InfoRow";
import WarningBanner from "@/components/checkout/WarningBanner";
import Screen from "@/components/common/Screen";

export default function CheckoutScreen() {
  const router = useRouter();

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <CheckoutHeader restaurantName="McDonald's" />
        <DeliveryMap />
        <AddressCard
          addressLine1="165 Ikoyi, Lagos"
          addressLine2="LS 10013, Lagos State, Nigeria"
        />
        <WarningBanner
          message="We think you may have entered an invalid apartment or suite number. Please check and correct if needed."
          actionLabel="Edit Address"
        />
        <InfoRow
          iconName="person-outline"
          title="Meet at door"
          subtitle="Add delivery note"
        />
        <InfoRow
          iconName="time-outline"
          title="Delivery time"
          subtitle="20-30 min"
        />
        <DeliveryOptionsRow />
      </ScrollView>
      <CheckoutFooter total="$12.54" onPress={() => router.push("/")} />
    </Screen>
  );
}
