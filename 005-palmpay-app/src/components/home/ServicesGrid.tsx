import ServiceItemTile from "@/components/home/ServiceItemTile";
import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { services } from "@/data/services";
import { StyleSheet, View } from "react-native";

interface ServicesGridProps {
  onPressItem?: (id: string) => void;
}

export default function ServicesGrid({ onPressItem }: ServicesGridProps) {
  return (
    <View style={styles.card}>
      <View style={styles.grid}>
        {services.map((item) => (
          <ServiceItemTile
            key={item.id}
            item={item}
            onPress={() => onPressItem?.(item.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.sm,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
