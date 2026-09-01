import CallActionsRow from "@/components/calls/CallActionsRow";
import CallListItem from "@/components/calls/CallListItem";
import IconButton from "@/components/common/IconButton";
import Screen from "@/components/common/Screen";
import ScreenHeader from "@/components/common/ScreenHeader";
import SectionLabel from "@/components/updates/SectionLabel";
import { calls } from "@/data/calls";
import { FlatList, StyleSheet } from "react-native";

export default function CallsScreen() {
  return (
    <Screen>
      <ScreenHeader
        title="Calls"
        rightActions={
          <>
            <IconButton
              name="add"
              backgroundColor="#FFFFFF"
              iconColor="#000000"
            />
          </>
        }
      />

      <FlatList
        data={calls}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <CallActionsRow />
            <SectionLabel label="Recent" />
          </>
        }
        renderItem={({ item }) => <CallListItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 120,
  },
});
