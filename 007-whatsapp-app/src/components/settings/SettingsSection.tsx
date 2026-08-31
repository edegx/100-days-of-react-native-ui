import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing, radii } from '@/constants/spacing';
import { SettingsSectionData } from '@/types';
import SettingsListItem from './SettingsListItem';
import Separator from '../common/Separator';

interface SettingsSectionProps {
  section: SettingsSectionData;
}

export default function SettingsSection({ section }: SettingsSectionProps) {
  return (
    <View style={styles.card}>
      {section.items.map((item, index) => (
        <Fragment key={item.id}>
          <SettingsListItem item={item} />
          {index < section.items.length - 1 && <Separator inset={spacing.lg + 28 + spacing.sm} />}
        </Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    overflow: 'hidden',
  },
});
