import { Image, Pressable, StyleSheet, Text } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Restaurant } from "@/types";
import RatingBadge from "../common/RatingBadge";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onPress?: () => void;
}

export default function RestaurantCard({
  restaurant,
  onPress,
}: RestaurantCardProps) {
  return (
    <>
      <Pressable style={styles.container} onPress={onPress}>
        <Image source={{ uri: restaurant.imageUri }} style={styles.image} />
        <Text style={styles.name} numberOfLines={1}>
          {restaurant.name}
        </Text>
        <RatingBadge
          rating={restaurant.rating}
          count={restaurant.ratingCount}
        />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 290,
  },
  image: {
    width: 280,
    height: 120,
    borderRadius: radius.lg,
    backgroundColor: colors.chipBackground,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.black,
    marginTop: spacing.sm,
  },
});
