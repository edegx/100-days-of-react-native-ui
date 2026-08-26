import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import IconButton from "../common/IconButton";

interface HeaderProps {
  greeting: string;
  name: string;
  onPressBell?: () => void;
}

export default function Header({ greeting, name, onPressBell }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={typography.greeting}>{greeting}</Text>
        <Text style={typography.userName}>{name}</Text>
      </View>
      <IconButton onPress={onPressBell} backgroundColor={colors.surface}>
        <Image
          source={require("../../../assets/images/notification.png")}
          style={{ width: 20, height: 20 }}
        />
      </IconButton>
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
});
