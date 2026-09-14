import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { radius, spacing } from '@/constants/spacing';

export default function BrandMark() {
  return (
    <View style={styles.row}>
      <View style={styles.badge}>
        <Ionicons name="leaf" size={18} color={colors.white} />
      </View>
      <Text style={styles.name}>Thrive</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  badge: {
    width: 34,
    height: 34,
    borderRadius: radius.sm,
    backgroundColor: colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.textHeading,
  },
});
