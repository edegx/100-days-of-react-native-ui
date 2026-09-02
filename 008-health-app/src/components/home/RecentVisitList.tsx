import RecentVisitCard from "@/components/home/RecentVisitCard";
import { spacing } from "@/constants/spacing";
import { RecentVisit } from "@/types";
import { FlatList, StyleSheet } from "react-native";
import SectionHeader from "../common/SectionHeader";

interface RecentVisitListProps {
  recentVisits: RecentVisit[];
}

export default function RecentVisitList({
  recentVisits,
}: RecentVisitListProps) {
  return (
    <>
      <SectionHeader title="Recent Visits" />
      <FlatList
        horizontal
        data={recentVisits}
        keyExtractor={(item: RecentVisit) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => <RecentVisitCard recentVisit={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
});
