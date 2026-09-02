import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function SearchBar({
  placeholder = "Search Doctor",
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/search.png")}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={colors.textMuted}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    marginHorizontal: spacing.xl,
    paddingHorizontal: spacing.lg,
    height: 52,
    borderRadius: 50,
    marginBottom: spacing.xl,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  icon: {
    marginRight: spacing.sm,
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: colors.textPrimary,
  },
});
