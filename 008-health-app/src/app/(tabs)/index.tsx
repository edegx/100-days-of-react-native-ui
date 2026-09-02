import Screen from "@/components/common/Screen";
import CategoryList from "@/components/home/CategoryList";
import Header from "@/components/home/Header";
import QuickActionsList from "@/components/home/QuickActionsList";
import RecentVisitList from "@/components/home/RecentVisitList";
import SearchBar from "@/components/home/SearchBar";
import UpcomingAppointmentSection from "@/components/home/UpcomingAppointmentSection";
import { spacing } from "@/constants/spacing";
import { doctors } from "@/data/doctors";
import { recentVisits } from "@/data/recentVisits";
import { Appointment } from "@/types";
import { ScrollView, StyleSheet } from "react-native";

const upcomingAppointment: Appointment = {
  id: "1",
  doctor: doctors[0],
  service: "Orthopedic Consultation (Foot & Ankle)",
  date: "Wed, 7 Sep 2026",
  time: "10:30 - 11:30 AM",
};

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header
          name="Ezekiel Edegware"
          avatarUri="https://scontent-los4-1.cdninstagram.com/v/t51.2885-19/328790697_565200012334358_8811009323574588240_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-los4-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2gGL8n6SK1-jOsh8WzyXsMMEhty_6T3zGwSmwPVJgI8NJ35o3nUksUpyzeaeyNfnm9s&_nc_ohc=NZAR242TqUsQ7kNvwFhrk6e&_nc_gid=ezOufn6PjkmbRYF-n5injg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AQLkf0ZIjuZXD3184wX_v1AHjaPBAqCfqZrwR4-RCZTVfQ&oe=6A9BFFD8&_nc_sid=10d13b"
          onNotificationPress={() => {}}
        />
        <SearchBar />
        <QuickActionsList />
        <CategoryList />
        <UpcomingAppointmentSection
          appointment={upcomingAppointment}
          // onPress={() => router.push("/treat")}
        />
        <RecentVisitList recentVisits={recentVisits} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxl,
  },
});
