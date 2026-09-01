import { colors } from "@/constants/colors";
import { StyleSheet, View } from "react-native";

interface SeparatorProps {
  inset?: number;
}

export default function Separator({ inset = 0 }: SeparatorProps) {
  return <View style={[styles.line, { marginLeft: inset }]} />;
}

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
  },
});
