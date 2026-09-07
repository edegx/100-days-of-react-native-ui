import { spacing } from "@/constants/spacing";
import { ngnAssetOfferings, usdAssetOfferings } from "@/data/offerings";
import { StyleSheet, View } from "react-native";
import AssetOfferingCard from "./AssetOfferingCard";

type Currency = "naira" | "usd" | "all";

interface AssetOfferingsGridProps {
  selected: Currency;
}

function chunkPairs<T>(items: T[]): T[][] {
  const rows: T[][] = [];

  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  return rows;
}

export default function AssetOfferingsGrid({
  selected,
}: AssetOfferingsGridProps) {
  const offerings =
    selected === "naira"
      ? ngnAssetOfferings
      : selected === "usd"
        ? usdAssetOfferings
        : [...ngnAssetOfferings, ...usdAssetOfferings];

  const rows = chunkPairs(offerings);

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((offering) => (
            <AssetOfferingCard
              key={offering.id}
              offering={offering}
            />
          ))}

          {row.length === 1 && <View style={styles.spacer} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },

  row: {
    flexDirection: "row",
    gap: spacing.md,
  },

  spacer: {
    flex: 1,
  },
});