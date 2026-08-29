import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { services } from "@/data/services";
import type { ServiceItemData } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ServiceItem from "./ServiceItem";

interface ServicesGridProps {
  onServicePress?: (item: ServiceItemData) => void;
  onEditPress?: () => void;
}

export default function ServicesGrid({
  onServicePress,
  onEditPress,
}: ServicesGridProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Services</Text>
        <Pressable onPress={onEditPress}>
          <Text style={styles.editLink}>Edit</Text>
        </Pressable>
      </View>
      <View style={styles.grid}>
        {services.map((item) => (
          <ServiceItem key={item.id} item={item} onPress={onServicePress} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
    marginBottom: -30,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: "700",
  },
  editLink: {
    color: colors.accentYellow,
    fontSize: 15,
    fontWeight: "700",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
