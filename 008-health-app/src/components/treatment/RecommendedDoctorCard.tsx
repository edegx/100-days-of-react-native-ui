import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Doctor } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface RecommendedDoctorCardProps {
  doctor: Doctor;
  onVisitPress?: () => void;
}

export default function RecommendedDoctorCard({
  doctor,
  onVisitPress,
}: RecommendedDoctorCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageBackground}>
        <Image
          source={{ uri: doctor.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.info}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>
            {doctor.name}
          </Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.experienceRow}>
            <Ionicons
              name="briefcase-outline"
              size={14}
              color={colors.textSecondary}
            />
            <Text style={styles.experience}>{doctor.experience}</Text>
          </View>

          <Pressable onPress={onVisitPress} style={styles.button}>
            <Text style={styles.buttonText}>Visit</Text>
            <Ionicons name="chevron-forward" size={14} color={colors.white} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginHorizontal: spacing.xl,
    borderRadius: radius.xl,
    padding: spacing.md,
    marginBottom: spacing.lg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  imageBackground: {
    width: 76,
    height: 76,
    borderRadius: radius.lg,
    backgroundColor: "#F3F4F6",
    marginRight: spacing.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  header: {
    marginBottom: spacing.sm,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  specialty: {
    fontSize: 13.5,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  experienceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  experience: {
    fontSize: 12.5,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    height: 32,
    borderRadius: 16,
    gap: 2,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12.5,
    fontWeight: "600",
  },
});
