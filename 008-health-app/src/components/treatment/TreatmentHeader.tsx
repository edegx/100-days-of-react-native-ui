import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../common/IconButton";

interface TreatmentHeaderProps {
  title: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
}

export default function TreatmentHeader({
  title,
  onBackPress,
  onMenuPress,
}: TreatmentHeaderProps) {
  return (
    <View style={styles.container}>
      <IconButton onPress={onBackPress} style={styles.sideButton}>
        <Ionicons name="chevron-back" size={20} color={colors.textPrimary} />
      </IconButton>

      <Text style={styles.title}>{title}</Text>

      <IconButton onPress={onMenuPress} style={styles.sideButton}>
        <Ionicons
          name="ellipsis-vertical"
          size={20}
          color={colors.textPrimary}
        />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  sideButton: {
    borderWidth: 1,
    borderColor: colors.border,
  },
});
