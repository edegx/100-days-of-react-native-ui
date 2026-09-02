import SectionHeader from "@/components/common/SectionHeader";
import ScheduleCard from "@/components/treatment/ScheduleCard";
import { spacing } from "@/constants/spacing";
import { ScheduleItem } from "@/types";
import { FlatList, StyleSheet } from "react-native";

interface ScheduleListProps {
  items: ScheduleItem[];
}

export default function ScheduleList({ items }: ScheduleListProps) {
  return (
    <>
      <SectionHeader title="My Checkup Schedule" />
      <FlatList
        horizontal
        data={items}
        keyExtractor={(item: ScheduleItem) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => <ScheduleCard item={item} />}
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
