import { ScrollView } from "react-native";

import Screen from "@/components/common/Screen";
import AddressAlertBanner from "@/components/home/AddressAlertBanner";
import CategoryList from "@/components/home/CategoryList";
import LocationHeader from "@/components/home/LocationHeader";
import PromoBanner from "@/components/home/PromoBanner";
import RestaurantList from "@/components/home/RestaurantList";
import SearchBar from "@/components/home/SearchBar";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import PopularItemsSection from "@/components/restaurant/PopularItemsSection";
import { menuItems } from "@/data/menuItems";

export default function Index() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <LocationHeader label="Location" address="165 Ikoyi, Lagos" />
        <AddressAlertBanner message="Is this the right address? It looks a little far from you." />
        <SearchBar />
        <CategoryList />
        <PromoBanner
          title="20% off McDonald's"
          description="When you order $20+. Automatically applied."
          ctaLabel="Order now"
          imageUri="https://www.mac-menus.com/wp-content/uploads/2025/09/mccrispy-strips-meal-68ce5d26d155f.webp"
        />
        <RestaurantList />
        <PopularItemsSection title="Popular Items" items={menuItems} />
        <RestaurantList />
      </ScrollView>
      <BottomNavigation />
    </Screen>
  );
}
