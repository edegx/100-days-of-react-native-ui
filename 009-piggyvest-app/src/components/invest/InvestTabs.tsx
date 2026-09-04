import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { InvestTabKey } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TABS: { key: InvestTabKey; label: string }[] = [
  { key: "active", label: "Active" },
  { key: "matured", label: "Matured" },
];

interface InvestTabsProps {
  activeTab: InvestTabKey;
  onChange: (tab: InvestTabKey) => void;
}

export default function InvestTabs({ activeTab, onChange }: InvestTabsProps) {
  return (
    <View style={styles.wrapper}>
      {TABS.map((tab) => {
        const focused = tab.key === activeTab;
        return (
          <Pressable
            key={tab.key}
            style={styles.tab}
            onPress={() => onChange(tab.key)}
          >
            <Text style={[styles.label, focused && styles.labelActive]}>
              {tab.label}
            </Text>
            {focused && <View style={styles.indicator} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: "center",
    position: "relative",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.divider,
  },
  labelActive: {
    color: colors.purple,
    fontWeight: "700",
  },
  indicator: {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    height: 2.5,
    backgroundColor: colors.purple,
    borderRadius: 2,
  },
});