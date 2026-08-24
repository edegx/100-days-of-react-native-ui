import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

import { spacing } from "@/constants/spacing";
import { restaurants } from "@/data/restaurants";
import SectionHeader from "../common/SectionHeader";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SectionHeader title="Popular Local Restaurants" actionLabel="See all" />
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <RestaurantCard
            restaurant={item}
            onPress={() => router.push(`/restaurant/${item}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xl,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginTop: spacing.md,
  },
});
