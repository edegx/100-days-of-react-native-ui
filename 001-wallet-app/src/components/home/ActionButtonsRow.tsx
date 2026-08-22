import React from "react";
import { StyleSheet, View } from "react-native";

import { spacing } from "@/constants/spacing";
import ActionButton from "./ActionButton";

export default function ActionButtonsRow() {
  return (
    <View style={styles.container}>
      <ActionButton label="Send" iconName="paper-plane-outline" />
      <ActionButton label="Receive" iconName="qr-code-outline" />
      <ActionButton iconName="swap-horizontal" variant="square" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.xl,
    marginTop: spacing.xxl,
  },
});
