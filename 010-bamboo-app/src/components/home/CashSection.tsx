import SectionHeader from "@/components/common/SectionHeader";
import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { wallets } from "@/data/wallets";
import { StyleSheet, View } from "react-native";
import WalletRow from "./WalletRow";

export default function CashSection() {
  return (
    <View style={styles.container}>
      <SectionHeader title="Cash" />
      <View style={styles.card}>
        {wallets.map((wallet, index) => (
          <WalletRow
            key={wallet.id}
            wallet={wallet}
            isLast={index === wallets.length - 1}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xxl,
  },
  card: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    overflow: "hidden",
  },
});
