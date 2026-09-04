import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { HomeIcon, InvestIcon, SavingsIcon } from "../common/icons";
import Avatar from "./Avatar";

const ICON_MAP: Record<string, any> = {
  home: HomeIcon,
  savings: SavingsIcon,
  invest: InvestIcon,
};

interface TabHeaderProps {
  iconName: string;
  iconColor: string;
  title: string;
  subtitle: string;
}

export default function TabHeader({
  iconName,
  iconColor,
  title,
  subtitle,
}: TabHeaderProps) {
  const router = useRouter();
  const IconComponent = ICON_MAP[iconName];
  const AVATAR_URI =
    "https://mobile.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggybankservice.appspot.com%2Fagent_pics%2Fthumb.logo1b451bc36d.jpeg&w=48&q=75";
  return (
    <View style={styles.row}>
      {IconComponent ? <IconComponent size={30} color={iconColor} /> : null}

      <View style={styles.textBlock}>
        <Text style={typography.cardTitle}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Avatar
        uri={AVATAR_URI}
        size={48}
        onPress={() => router.push("/account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    gap: spacing.md,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  textBlock: {
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
