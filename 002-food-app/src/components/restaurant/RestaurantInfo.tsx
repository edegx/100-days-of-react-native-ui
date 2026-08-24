import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import RatingBadge from "@/components/common/RatingBadge";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Restaurant } from "@/types";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

export default function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.nameRow}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Pressable hitSlop={8}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color={colors.mediumGray}
          />
        </Pressable>
      </View>

      <View style={styles.addressRow}>
        <Image
          source={require("../../../assets/images/location.png")}
          style={{ width: 16, height: 16 }}
        />
        <Text style={styles.address}>{restaurant.address}</Text>
        <Text style={styles.dot}>·</Text>
        <RatingBadge
          rating={restaurant.rating}
          count={restaurant.ratingCount}
          size={12}
        />
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>
            {restaurant.deliveryTimeMin} - {restaurant.deliveryTimeMax} min
          </Text>
          <Text style={styles.statLabel}>Delivery time</Text>
        </View>
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>{restaurant.deliveryFee}</Text>
          <View style={styles.feeNoteRow}>
            <Text style={styles.statLabel}>{restaurant.deliveryFeeNote}</Text>
            <Ionicons
              name="information-circle-outline"
              size={12}
              color={colors.mediumGray}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.black,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: spacing.sm,
  },
  address: {
    fontSize: 13,
    color: colors.mediumGray,
  },
  dot: {
    fontSize: 13,
    color: colors.mediumGray,
    marginHorizontal: 2,
  },
  statsRow: {
    flexDirection: "row",
    gap: spacing.xxl,
    marginTop: spacing.lg,
  },
  statBlock: {},
  statValue: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.black,
  },
  statLabel: {
    fontSize: 12,
    color: colors.mediumGray,
    marginTop: 2,
  },
  feeNoteRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
});
