import { Image, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/66500956?v=4",
          }}
          size={48}
          tierLabel="3"
        />
        <Text style={styles.greeting}>Hi, edegx</Text>
      </View>

      <View style={styles.right}>
        <IconButton labelBadge="Help">
          <Image
            source={require("../../../assets/images/support.png")}
            style={{ width: 24, height: 24 }}
          />
        </IconButton>
        <IconButton>
          <MaterialCommunityIcons
            name="crop-free"
            color={colors.textSecondary}
            size={22}
          />
        </IconButton>
        <IconButton>
          <Ionicons
            name="notifications-outline"
            color={colors.textSecondary}
            size={22}
          />
        </IconButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
});
