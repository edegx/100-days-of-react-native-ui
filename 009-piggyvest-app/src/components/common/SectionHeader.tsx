import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';

interface SectionHeaderProps {
  title: string;
  emoji?: string;
  subtitle?: string;
  linkLabel?: string;
  linkColor?: string;
  onLinkPress?: () => void;
  showArrowButton?: boolean;
  onArrowPress?: () => void;
}

export default function SectionHeader({
  title,
  emoji,
  subtitle,
  linkLabel,
  linkColor = colors.blueLight,
  onLinkPress,
  showArrowButton,
  onArrowPress,
}: SectionHeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.titleRow}>
          <Text style={typography.sectionTitle}>
            {title}
            {emoji ? ` ${emoji}` : ''}
          </Text>
        </View>

        {linkLabel && (
          <Pressable onPress={onLinkPress} hitSlop={8} style={styles.linkRow}>
            <Text style={[typography.sectionLink, { color: linkColor }]}>{linkLabel}</Text>
            <Feather name="chevron-right" size={16} color={linkColor} />
          </Pressable>
        )}

        {showArrowButton && (
          <Pressable onPress={onArrowPress} style={styles.arrowButton} hitSlop={8}>
            <Feather name="arrow-right" size={18} color={colors.white} />
          </Pressable>
        )}
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.backgroundElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    marginTop: spacing.xs,
    fontSize: 14,
    color: colors.textSecondary,
  },
});
