import BottomNavigation from "@/components/navigation/BottomNavigation";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomNavigation {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="treat" options={{ title: "Treat" }} />
      <Tabs.Screen name="medicine" options={{ title: "Medicine" }} />
      <Tabs.Screen name="clinic" options={{ title: "Clinic" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
