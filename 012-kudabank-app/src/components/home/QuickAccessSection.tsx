import QuickAccessItem from "@/components/home/QuickAccessItem";
import { spacing } from "@/constants/spacing";
import { quickAccessData } from "@/data/quickAccessData";
import React from "react";
import { StyleSheet, View } from "react-native";

const QuickAccessSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {quickAccessData.map((item) => (
          <QuickAccessItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  grid: {
    flexDirection: "row",
    gap: spacing.md,
  },
});

export default QuickAccessSection;
