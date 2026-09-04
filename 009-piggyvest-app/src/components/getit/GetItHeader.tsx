import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

export default function GetItHeader() {
  return (
    <View style={styles.row}>
      <View style={styles.logo}>
        <Feather name="pie-chart" size={20} color={colors.white} />
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.title}>GetIT by PiggyVest</Text>
        <Text style={styles.subtitle}>Save for what you want & get it.</Text>
      </View>

      <Pressable style={styles.iconButton} hitSlop={8}>
        <Feather name="search" size={20} color={colors.white} />
      </Pressable>
      <Pressable style={styles.iconButton} hitSlop={8}>
        <Feather name="map-pin" size={20} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    gap: spacing.md,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  iconButton: {
    width: 22,
    alignItems: 'center',
  },
});
