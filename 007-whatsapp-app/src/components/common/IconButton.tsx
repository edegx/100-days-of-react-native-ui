import { colors } from "@/constants/colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, ViewStyle } from "react-native";

interface IconButtonProps {
  name: string,
  size?: number;
  iconSize?: number;
  onPress?: () => void;
  backgroundColor?: string;
  iconColor?: string;
  style?: ViewStyle;
  font?: string
}

export default function IconButton({
  name,
  size = 44,
  iconSize = 20,
  onPress,
  backgroundColor = colors.surface,
  iconColor = colors.white,
  font = "FontAwesome6",
  style,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          opacity: pressed ? 0.6 : 1,
        },
        style,
      ]}
    >
      {font === "FontAwesome6"? ( <FontAwesome6 name={name} size={iconSize} color={iconColor} /> ):
      ( <Ionicons name={name as keyof typeof Ionicons.glyphMap } size={iconSize} color={iconColor} />)
      }
     
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
