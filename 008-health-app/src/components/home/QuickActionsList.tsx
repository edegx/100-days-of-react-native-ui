import { spacing } from "@/constants/spacing";
import { quickActions } from "@/data/quickActions";
import { QuickAction } from "@/types";
import { StyleSheet, Text, View } from "react-native";
import QuickActionItem from "./QuickActionItem";

export default function QuickActionsList() {
  return (
    <View>
      <View style={{ paddingHorizontal: spacing.xl, marginBottom: spacing.md }}>
        <Text style={styles.title}>Quick Actions</Text>
      </View>
      <View style={styles.container}>
        {quickActions.map((item: QuickAction) => (
          <QuickActionItem key={item.id} quickAction={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: spacing.md,
  },
});
