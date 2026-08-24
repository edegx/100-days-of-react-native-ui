import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Screen from "@/components/common/Screen";
import CartBar from "@/components/restaurant/CartBar";
import DealsBanner from "@/components/restaurant/DealsBanner";
import PopularItemsSection from "@/components/restaurant/PopularItemsSection";
import RestaurantHeaderImage from "@/components/restaurant/RestaurantHeaderImage";
import RestaurantInfo from "@/components/restaurant/RestaurantInfo";
import { menuItems } from "@/data/menuItems";
import { restaurants } from "@/data/restaurants";
import { MenuItem } from "@/types";

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [cart, setCart] = useState<MenuItem[]>([]);

  const restaurant = useMemo(
    () => restaurants.find((item) => item.id === id) ?? restaurants[0],
    [id],
  );

  const items = useMemo(
    () => menuItems.filter((item) => item.restaurantId === restaurant.id),
    [restaurant.id],
  );

  const cartTotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")),
    0,
  );

  const handleAddItem = (item: MenuItem) => {
    setCart((current) => [...current, item]);
  };

  return (
    <Screen edges={["left", "right"]} style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <RestaurantHeaderImage
          coverImageUri={restaurant.coverImageUri}
          logoUri={restaurant.logoUri}
        />
        <RestaurantInfo restaurant={restaurant} />
        <DealsBanner
          title="Deals for Days"
          description="Get $0 delivery fee on your first order over $10!"
          ctaLabel="Learn more"
          imageUri="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=300&fit=crop"
        />
        <PopularItemsSection
          title="Popular Items"
          items={items}
          onAddItem={handleAddItem}
        />
        <PopularItemsSection title="" items={items} onAddItem={handleAddItem} />
      </ScrollView>
      <View style={styles.cartBarWrap}>
        <CartBar
          itemCount={cart.length}
          total={`$${cartTotal.toFixed(2)}`}
          onPress={() => router.push("/checkout")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 40,
  },
  cartBarWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
