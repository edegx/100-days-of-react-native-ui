import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface InvestEmptyStateProps {
  title: string;
  description: string;
}

export default function InvestEmptyState({
  title,
  description,
}: InvestEmptyStateProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconSquircle}>
        <Feather name="list" size={26} color={colors.purple} />
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.xxxl,
    paddingHorizontal: spacing.xxxl,
  },
  iconSquircle: {
    width: 84,
    height: 84,
    borderRadius: radius.xl,
    backgroundColor: "#EEE4FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xl,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 20,
  },
});
