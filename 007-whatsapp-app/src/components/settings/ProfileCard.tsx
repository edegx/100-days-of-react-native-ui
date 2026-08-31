import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing, radii } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import Avatar from '../common/Avatar';
import { profile } from '@/data/settings';

export default function ProfileCard() {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <Avatar avatar={profile.avatar} size={64} />
      <View style={styles.content}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {profile.subtitle}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  pressed: {
    opacity: 0.7,
  },
  content: {
    marginLeft: spacing.lg,
    flex: 1,
  },
  name: {
    ...typography.title,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.subhead,
    color: colors.textSecondary,
    marginTop: 4,
  },
});
