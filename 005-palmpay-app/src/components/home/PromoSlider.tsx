import { colors } from "@/constants/colors";
import { radius, spacing } from "@/constants/spacing";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import PillButton from "../common/PillButton";

const { width } = Dimensions.get("window");

interface SlideItem {
  id: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  subtitle: string;
  buttonLabel: string;
  onPress: () => void;
}

interface PromoSliderProps {
  slides?: SlideItem[];
  onSlideChange?: (index: number) => void;
}

const defaultSlides: SlideItem[] = [
  {
    id: "1",
    icon: "wallet-outline",
    title: "Your Loan Is Ready",
    subtitle: "Enjoy a higher loan amount",
    buttonLabel: "Borrow",
    onPress: () => {},
  },
  {
    id: "2",
    icon: "cash-plus",
    title: "Get Up To ₦5M",
    subtitle: "Instant approval with low interest",
    buttonLabel: "Apply Now",
    onPress: () => {},
  },
  {
    id: "3",
    icon: "gift-outline",
    title: "Refer & Earn",
    subtitle: "Get ₦2,000 for every friend you refer",
    buttonLabel: "Invite Now",
    onPress: () => {},
  },
];

export default function PromoSlider({
  slides = defaultSlides,
  onSlideChange,
}: PromoSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    if (index !== activeIndex) {
      setActiveIndex(index);
      onSlideChange?.(index);
    }
  };

  const renderItem = ({ item }: { item: SlideItem }) => (
    <View style={styles.slide}>
      <View style={styles.row}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons
            name={item.icon}
            size={26}
            color={colors.purple}
          />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>

        <PillButton
          label={item.buttonLabel}
          variant="outline"
          onPress={item.onPress}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.dots}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  listContent: {
    paddingHorizontal: 0,
  },
  slide: {
    width: width - spacing.lg * 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.purpleMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  textBlock: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.xs,
    marginTop: spacing.md,
  },
  dot: {
    width: 16,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.purple,
    width: 20,
  },
});
