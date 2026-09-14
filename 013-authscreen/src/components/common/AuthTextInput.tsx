import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import EyeClosedIcon from "./EyeClosedIcon";
import EyeOpennedIcon from "./EyeOpennedIcon";
import UserIcon from "./UserIcon";

type IconName = keyof typeof Ionicons.glyphMap;

interface AuthTextInputProps extends TextInputProps {
  icon: IconName;
  isPassword?: boolean;
}

export default function AuthTextInput({
  icon,
  isPassword,
  ...rest
}: AuthTextInputProps) {
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.container}>
      {icon == "mail-outline" && (
        <>
          <Image
            source={require("../../../assets/images/icons/mail.png")}
            style={styles.leadingIcon}
          />
        </>
      )}

      {icon == "person-outline" && (
        <View style={styles.leadingIcon}>
          <UserIcon size={14} />
        </View>
      )}

      {icon == "lock-closed-outline" && (
        <Image
          source={require("../../../assets/images/icons/padlock.png")}
          style={styles.leadingIcon}
        />
      )}
      {/* <Ionicons name={icon} size={18} color={colors.textPlaceholder} style={styles.leadingIcon} /> */}
      <TextInput
        placeholderTextColor={colors.textPlaceholder}
        secureTextEntry={isPassword ? hidden : false}
        style={styles.input}
        {...rest}
      />
      {isPassword && (
        <Pressable onPress={() => setHidden((prev) => !prev)} hitSlop={10}>
          {hidden ? <EyeClosedIcon size={18} /> : <EyeOpennedIcon size={18} />}
          {/* <Ionicons
            name={hidden ? "eye-off-outline" : "eye-outline"}
            size={18}
            color={colors.textPlaceholder}
          /> */}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 54,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: spacing.lg,
  },
  leadingIcon: {
    marginRight: spacing.sm,
    width: 12,
    height: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
  },
});
