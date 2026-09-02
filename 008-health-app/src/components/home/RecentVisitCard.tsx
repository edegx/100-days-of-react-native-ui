import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { RecentVisit } from "@/types";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import IconButton from "../common/IconButton";

interface RecentVisitCardProps {
  recentVisit: RecentVisit;
  onAllPress?: () => void;
  onBookPress?: () => void;
}

export default function RecentVisitCard({
  recentVisit,
  onAllPress,
  onBookPress,
}: RecentVisitCardProps) {
  const { doctor, date, time, medium } = recentVisit;

  const getMediumIcon = () => {
    switch (medium) {
      case "In-person":
        return "person-outline";
      case "Phone":
        return "call-outline";
      case "Zoom":
      default:
        return "videocam-outline";
    }
  };

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.imageBackground}>
            <Image
              source={{ uri: doctor.image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.headerInfo}>
            <Text numberOfLines={1} style={styles.name}>
              {doctor.name}
            </Text>
            <Text style={styles.experience}>{doctor.experience}</Text>
            <Text style={styles.specialty}>{doctor.specialty}</Text>
          </View>
        </View>

        {/* Status Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Recent</Text>
        </View>
      </View>

      {/* Info row section  */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Ionicons
            name="calendar-outline"
            size={18}
            color={colors.textSecondary}
          />
          <Text style={styles.infoText}>{date}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons
            name="time-outline"
            size={18}
            color={colors.textSecondary}
          />
          <Text style={styles.infoText}>{time}</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons
            name={getMediumIcon()}
            size={18}
            color={colors.textSecondary}
          />
          <Text style={styles.infoText}>{medium}</Text>
        </View>
      </View>

      {/* Action section  */}

      <View style={styles.actions}>
        <Pressable
          onPress={onAllPress}
          style={[styles.actionButton, styles.bookNowButton]}
        >
          <Ionicons name="calendar-outline" size={20} color={colors.white} />
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </Pressable>

        <IconButton
          style={{
            borderWidth: 1.5,
            borderColor: colors.primary,
            backgroundColor: "transparent",
          }}
        >
          <MaterialCommunityIcons
            name="phone-outline"
            size={20}
            color={colors.primary}
          />
        </IconButton>
      </View>
    </View>
  );
}

const CARD_WIDTH = 340;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    borderRadius: radius.xl,
    backgroundColor: colors.white,
    padding: spacing.lg,
    marginRight: spacing.md,
    // Shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  imageBackground: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E0F0F2", // Light blue background behind avatar
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.md,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerInfo: {
    flex: 1,
    paddingRight: spacing.md,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  experience: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  specialty: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  badge: {
    backgroundColor: "#ff6702", // Orange badge
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    position: "absolute",
    right: -spacing.lg, // Push to the right edge ignoring padding
    top: 4,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xl,
    paddingHorizontal: 4,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    gap: spacing.md,
  },
  actionButton: {
    flex: 1,
    height: 48,
    borderRadius: 24, // Pill shape
    alignItems: "center",
    justifyContent: "center",
  },
  bookNowButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.primary,
  },
  bookNowButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
});
