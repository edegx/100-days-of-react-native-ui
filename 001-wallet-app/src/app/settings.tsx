import { ScrollView, Text } from "react-native";

import Screen from "@/components/common/Screen";

export default function Setting() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Text>Settings</Text>
      </ScrollView>
    </Screen>
  );
}
