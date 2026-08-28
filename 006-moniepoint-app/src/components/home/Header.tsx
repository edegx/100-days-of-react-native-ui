import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '@/components/common/Avatar';
import IconButton from '@/components/common/IconButton';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

const AVATAR_URI =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=faces';

interface HeaderProps {
  level: string;
  onSupportPress?: () => void;
  onNotificationPress?: () => void;
}

export default function Header({ level, onSupportPress, onNotificationPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar uri={AVATAR_URI} size={44} />
        <Text style={styles.level}>{level}</Text>
      </View>
      <View style={styles.right}>
        <IconButton name="headset-outline" onPress={onSupportPress} style={styles.iconSpacing} />
        <IconButton name="notifications-outline" onPress={onNotificationPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  level: {
    marginLeft: spacing.md,
    color: colors.textSecondary,
    fontSize: 17,
    fontWeight: '600',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: spacing.xl,
  },
});
