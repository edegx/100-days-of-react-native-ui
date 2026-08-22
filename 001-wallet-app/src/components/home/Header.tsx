import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import Avatar from "../common/Avatar";

interface HeaderProps {
  greeting: string;
  name: string;
}

export default function Header({ greeting, name }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Avatar
        size={56}
        source={{
          uri: "https://pbs.twimg.com/profile_images/1650589736883331076/b8HCH0SZ_400x400.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: spacing.xl,
    marginTop: spacing.lg,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "400",
    color: colors.mediumGray,
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.black,
    marginTop: 2,
  },
});
