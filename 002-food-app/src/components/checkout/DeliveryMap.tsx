import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";

export default function DeliveryMap() {
  return (
    <View style={styles.container}>
      {/* Map Image - Rectangle shape */}
      <Image
        source={require("../../../assets/images/map.png")}
        style={styles.mapImage}
        resizeMode="cover"
      />

      {/* Grid Overlay */}
      <View style={styles.gridOverlay} pointerEvents="none">
        {Array.from({ length: 5 }).map((_, i) => (
          <View
            key={`h-${i}`}
            style={[styles.hLine, { top: `${(i + 1) * 16}%` }]}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <View
            key={`v-${i}`}
            style={[styles.vLine, { left: `${(i + 1) * 16}%` }]}
          />
        ))}
      </View>

      {/* Pin - stays on top */}
      <View style={styles.pinWrap}>
        <View style={styles.pin}>
          <Ionicons name="home" size={14} color={colors.white} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.mapBackground,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Ensure proper stacking context
  },
  mapImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    borderRadius: radius.lg, // Match container border radius
  },
  gridOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Ensure grid is above image
  },
  hLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  vLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  pinWrap: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2, // Ensure pin is above everything
  },
  pin: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.white,
  },
});
