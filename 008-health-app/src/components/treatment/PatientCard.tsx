import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Patient } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface PatientCardProps {
  patient: Patient;
  onPress?: () => void;
}

export default function PatientCard({ patient, onPress }: PatientCardProps) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.imageBackground}>
            <Image
              source={{ uri: patient.image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.name} numberOfLines={1}>
              {patient.name}
            </Text>
            <Text style={styles.meta}>
              ID: #PT-{Math.floor(Math.random() * 10000)}
            </Text>
          </View>
        </View>
      </View>

      {/* Info Row Section */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Ionicons
            name="male-female-outline"
            size={18}
            color={colors.textSecondary}
          />
          <Text style={styles.infoText}>{patient.gender}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons
            name="calendar-outline"
            size={18}
            color={colors.textSecondary}
          />
          <Text style={styles.infoText}>{patient.age} y.o</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons
            name="body-outline"
            size={18}
            color={colors.textSecondary}
          />
          <Text style={styles.infoText}>{patient.height}</Text>
        </View>
      </View>

      {/* Actions Section */}
      <Pressable onPress={onPress} style={styles.actionButton}>
        <Ionicons name="document-text-outline" size={20} color={colors.white} />
        <Text style={styles.actionButtonText}>
          {patient.treatmentPlansCount} Treatment Plans
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.xl,
    padding: spacing.lg,
    borderRadius: radius.xl,
    marginBottom: spacing.xxl,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  imageBackground: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#F3F4F6", // Soft fallback color
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerInfo: {
    flex: 1,
    paddingRight: spacing.md,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  meta: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
    padding: spacing.md,
    borderRadius: radius.lg,
    marginBottom: spacing.xl,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 48,
    borderRadius: 24,
    gap: spacing.sm,
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
});
