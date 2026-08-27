import React from 'react';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { IconSpec } from '@/types';

interface AppIconProps {
  icon: IconSpec;
  size?: number;
  color?: string;
}

export default function AppIcon({ icon, size = 24, color }: AppIconProps) {
  const resolvedColor = color ?? icon.color ?? '#FFFFFF';

  switch (icon.family) {
    case 'material-community':
      return (
        <MaterialCommunityIcons
          name={icon.name as React.ComponentProps<typeof MaterialCommunityIcons>['name']}
          size={size}
          color={resolvedColor}
        />
      );
    case 'font-awesome-5':
      return (
        <FontAwesome5
          name={icon.name as React.ComponentProps<typeof FontAwesome5>['name']}
          size={size}
          color={resolvedColor}
        />
      );
    case 'ionicons':
    default:
      return (
        <Ionicons
          name={icon.name as React.ComponentProps<typeof Ionicons>['name']}
          size={size}
          color={resolvedColor}
        />
      );
  }
}
