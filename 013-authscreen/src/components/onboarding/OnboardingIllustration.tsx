import React from 'react';
import Svg, { Circle, Ellipse, Line, Path, Rect } from 'react-native-svg';
import { colors } from '@/constants/colors';

interface OnboardingIllustrationProps {
  width?: number;
  height?: number;
}

export default function OnboardingIllustration({ width = 220, height = 220 }: OnboardingIllustrationProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 220 220" fill="none">
      {/* floor shadows */}
      <Ellipse cx="110" cy="196" rx="70" ry="5" fill={colors.divider} />
      <Ellipse cx="45" cy="188" rx="10" ry="3" fill={colors.divider} />
      <Ellipse cx="178" cy="188" rx="8" ry="3" fill={colors.divider} />

      {/* headphone band */}
      <Path d="M78 78 Q110 48 142 78" stroke={colors.black} strokeWidth={3} fill="none" strokeLinecap="round" />
      <Rect x="70" y="74" width="14" height="22" rx="6" fill={colors.black} />
      <Rect x="136" y="74" width="14" height="22" rx="6" fill={colors.black} />

      {/* head */}
      <Circle cx="110" cy="92" r="30" fill={colors.white} stroke={colors.black} strokeWidth={3} />
      {/* hair */}
      <Path
        d="M82 82 Q78 52 110 50 Q142 52 138 82 Q136 66 122 64 Q118 74 106 66 Q98 76 88 68 Q84 74 82 82 Z"
        fill={colors.black}
      />
      {/* glasses */}
      <Circle cx="98" cy="94" r="9" fill="none" stroke={colors.black} strokeWidth={2.5} />
      <Circle cx="124" cy="94" r="9" fill="none" stroke={colors.black} strokeWidth={2.5} />
      <Line x1="107" y1="94" x2="115" y2="94" stroke={colors.black} strokeWidth={2.5} />
      {/* smile */}
      <Path d="M104 106 Q111 111 118 106" stroke={colors.black} strokeWidth={2.5} strokeLinecap="round" fill="none" />

      {/* body */}
      <Path
        d="M76 172 Q72 128 92 116 Q110 108 128 116 Q148 128 144 172 Z"
        fill={colors.white}
        stroke={colors.black}
        strokeWidth={3}
      />
      {/* waving arm */}
      <Path
        d="M78 130 Q54 122 46 100"
        stroke={colors.black}
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
      <Circle cx="45" cy="96" r="7" fill={colors.white} stroke={colors.black} strokeWidth={3} />
      {/* motion lines by waving hand */}
      <Line x1="26" y1="82" x2="34" y2="88" stroke={colors.black} strokeWidth={2} strokeLinecap="round" />
      <Line x1="24" y1="98" x2="33" y2="98" stroke={colors.black} strokeWidth={2} strokeLinecap="round" />
      <Line x1="28" y1="114" x2="36" y2="108" stroke={colors.black} strokeWidth={2} strokeLinecap="round" />

      {/* other arm resting on laptop */}
      <Path
        d="M140 130 Q150 140 146 156"
        stroke={colors.black}
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />

      {/* laptop */}
      <Path d="M64 190 L84 152 L138 152 L156 190 Z" fill={colors.black} />
      <Circle cx="110" cy="172" r="5" fill={colors.white} />
      <Rect x="60" y="188" width="100" height="6" rx="3" fill={colors.black} />
    </Svg>
  );
}
