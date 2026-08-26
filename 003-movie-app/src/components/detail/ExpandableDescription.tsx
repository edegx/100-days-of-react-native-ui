import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ExpandableDescriptionProps {
  text: string;
}

export default function ExpandableDescription({
  text,
}: ExpandableDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={typography.body}
        numberOfLines={expanded ? undefined : 3}
        ellipsizeMode="tail"
      >
        {text}
      </Text>

      <Text
        style={styles.readMore}
        onPress={() => setExpanded((prev) => !prev)}
      >
        {expanded ? " Read less" : "Read More"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
  readMore: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "700",
    marginTop: 2,
  },
});
