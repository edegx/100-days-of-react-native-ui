import Screen from "@/components/common/Screen";
import ScreenHeader from "@/components/common/ScreenHeader";
import MyStatusRow from "@/components/updates/MyStatusRow";
import SectionLabel from "@/components/updates/SectionLabel";
import UpdateListItem from "@/components/updates/UpdateListItem";
import { updates } from "@/data/updates";
import { FlatList, StyleSheet } from "react-native";

export default function UpdatesScreen() {
  return (
    <Screen>
      <ScreenHeader title="Updates" />

      <FlatList
        data={updates}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <SectionLabel label="Status" />
            <MyStatusRow />
            <SectionLabel label="Recent Updates" />
          </>
        }
        renderItem={({ item }) => <UpdateListItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 120,
    paddingTop: 4,
  },
});
