import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing, radii } from '@/constants/spacing';
import { typography } from '@/constants/typography';

export default function SearchBar() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.wrapper}>
      <Ionicons name="search" size={18} color={colors.textSecondary} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Search"
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.searchBar,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    paddingHorizontal: spacing.md,
    height: 40,
    marginBottom: spacing.lg,
  },
  icon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    ...typography.body,
    color: colors.textPrimary,
    padding: 0,
  },
});
