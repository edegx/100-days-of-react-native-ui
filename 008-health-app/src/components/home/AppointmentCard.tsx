import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Appointment } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import IconButton from "../common/IconButton";

interface AppointmentCardProps {
  appointment: Appointment;
  onPress?: () => void;
}

export default function AppointmentCard({
  appointment,
  onPress,
}: AppointmentCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.9 : 1 },
      ]}
    >
      <View style={styles.header}>
        <Image
          source={{ uri: appointment.doctor.image }}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.doctorName}>{appointment.doctor.name}</Text>
          <Text style={styles.service}>{appointment.service}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <IconButton
            backgroundColor={colors.primary}
            onPress={() => {}}
            style={{ padding: 0, borderRadius: 12, width: 28, height: 28 }}
          >
            <Ionicons name="calendar-outline" size={20} color={colors.white} />
          </IconButton>
          <Text style={styles.footerText}>{appointment.date}</Text>
        </View>
        <View style={styles.footerItem}>
          <IconButton
            backgroundColor={colors.primary}
            onPress={() => {}}
            style={{ padding: 0, borderRadius: 12, width: 28, height: 28 }}
          >
            <Ionicons name="time-outline" size={20} color={colors.white} />
          </IconButton>
          <Text style={styles.footerText}>{appointment.time}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    marginHorizontal: spacing.xl,
    borderRadius: radius.xl,
    padding: spacing.xl,
    marginBottom: spacing.xxl,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 24,
    marginRight: spacing.md,
  },
  headerText: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 2,
  },
  service: {
    fontSize: 12.5,
    color: "rgba(255,255,255,0.85)",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: spacing.md,
  },

  footer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.xl,
    borderRadius: 20,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  footerText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.white,
  },
});
