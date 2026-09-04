import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ActivityRow from './ActivityRow';
import { recentActivities } from '@/data/homeContent';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

export default function RecentActivities() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.heading}>Recent Activities</Text>
        {recentActivities.map((item, index) => (
          <ActivityRow key={item.id} item={item} isLast={index === recentActivities.length - 1} />
        ))}
      </View>

      <Pressable style={styles.viewMore}>
        <Text style={styles.viewMoreText}>View More</Text>
      </Pressable>

      <Pressable style={styles.refresh}>
        <Feather name="refresh-ccw" size={16} color={colors.white} />
        <Text style={styles.refreshText}>Refresh</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  heading: {
    color: colors.textSecondary,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  viewMore: {
    backgroundColor: '#EDEBE3',
    borderRadius: radius.pill,
    paddingVertical: spacing.md + 2,
    alignItems: 'center',
  },
  viewMoreText: {
    color: '#171313',
    fontWeight: '700',
    fontSize: 16,
  },
  refresh: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.textMuted,
    paddingVertical: spacing.md + 2,
  },
  refreshText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
