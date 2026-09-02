import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Appointment } from "@/types";
import { StyleSheet, Text, View } from "react-native";
import AppointmentCard from "./AppointmentCard";

interface UpcomingAppointmentSectionProps {
  appointment: Appointment;
  onPress?: () => void;
}

export default function UpcomingAppointmentSection({
  appointment,
  onPress,
}: UpcomingAppointmentSectionProps) {
  return (
    <View>
      <Text style={styles.title}>Upcoming Appointment</Text>
      <AppointmentCard appointment={appointment} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.lg,
  },
});
