import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Avatar from '@/components/common/Avatar';
import { spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';

interface HeaderProps {
  name: string;
  message: string;
}

export default function Header({ name, message }: HeaderProps) {
  const router = useRouter();
  const AVATAR_URI = "https://mobile.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggybankservice.appspot.com%2Fagent_pics%2Fthumb.logo1b451bc36d.jpeg&w=48&q=75";
  return (
    <View style={styles.row}>
      <View style={styles.textBlock}>
        <Text style={typography.greeting}>Hello {name}</Text>
        <Text style={typography.subGreeting}>{message}</Text>
      </View>
      <Avatar uri={AVATAR_URI} onPress={() => router.push('/account')} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  textBlock: {
    flexShrink: 1,
    paddingRight: spacing.md,
  },
});
