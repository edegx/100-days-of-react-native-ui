import Screen from "@/components/common/Screen";
import SectionHeader from "@/components/common/SectionHeader";
import PatientCard from "@/components/treatment/PatientCard";
import RecommendedDoctorCard from "@/components/treatment/RecommendedDoctorCard";
import ScheduleList from "@/components/treatment/ScheduleList";
import TreatmentHeader from "@/components/treatment/TreatmentHeader";
import { spacing } from "@/constants/spacing";
import { doctors } from "@/data/doctors";
import { patient, scheduleItems } from "@/data/schedule";
import { router } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function TreatmentScreen() {
  return (
    <Screen>
      <TreatmentHeader
        title="My Treatment"
        onBackPress={() => router.push("/")}
        onMenuPress={() => {}}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <PatientCard patient={patient} />

        <ScheduleList items={scheduleItems} />

        <SectionHeader title="Recommeded Doctor" />
        <RecommendedDoctorCard doctor={doctors[4]} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxxl,
  },
});
