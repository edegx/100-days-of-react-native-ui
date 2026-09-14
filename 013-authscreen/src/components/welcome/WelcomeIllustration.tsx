import React from 'react';
import Svg, { Circle, Ellipse, Line, Path, Rect } from 'react-native-svg';
import { colors } from '@/constants/colors';

interface WelcomeIllustrationProps {
  width?: number;
  height?: number;
}

export default function WelcomeIllustration({ width = 240, height = 240 }: WelcomeIllustrationProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 240 240" fill="none">
      {/* floor shadow */}
      <Ellipse cx="120" cy="208" rx="78" ry="6" fill={colors.divider} />

      {/* growth chart card */}
      <Rect x="140" y="120" width="66" height="70" rx="10" fill={colors.white} stroke={colors.black} strokeWidth={3} />
      <Line x1="152" y1="176" x2="152" y2="150" stroke={colors.accentGreen} strokeWidth={8} strokeLinecap="round" />
      <Line x1="168" y1="176" x2="168" y2="138" stroke={colors.accentGreen} strokeWidth={8} strokeLinecap="round" />
      <Line x1="184" y1="176" x2="184" y2="146" stroke={colors.black} strokeWidth={8} strokeLinecap="round" />

      {/* seated person */}
      <Circle cx="96" cy="82" r="26" fill={colors.white} stroke={colors.black} strokeWidth={3} />
      <Path
        d="M74 74 Q72 48 96 46 Q120 48 118 74 Q112 60 100 60 Q92 68 82 60 Q78 66 74 74 Z"
        fill={colors.black}
      />
      <Circle cx="87" cy="84" r="3" fill={colors.black} />
      <Circle cx="105" cy="84" r="3" fill={colors.black} />
      <Path d="M88 96 Q96 101 104 96" stroke={colors.black} strokeWidth={2.5} strokeLinecap="round" fill="none" />

      {/* torso, crossed legs */}
      <Path
        d="M60 190 Q56 140 96 132 Q136 140 132 190 Z"
        fill={colors.white}
        stroke={colors.black}
        strokeWidth={3}
      />
      <Path d="M60 188 Q96 206 132 188" stroke={colors.black} strokeWidth={3} fill="none" strokeLinecap="round" />

      {/* raised arm pointing to chart */}
      <Path d="M124 148 Q142 138 150 122" stroke={colors.black} strokeWidth={3} fill="none" strokeLinecap="round" />
      <Circle cx="152" cy="118" r="6" fill={colors.accentGreen} stroke={colors.black} strokeWidth={2} />

      {/* resting arm */}
      <Path d="M66 160 Q54 170 58 184" stroke={colors.black} strokeWidth={3} fill="none" strokeLinecap="round" />

      {/* sparkle accents */}
      <Circle cx="42" cy="70" r="4" fill={colors.accentGreen} />
      <Circle cx="200" cy="90" r="3" fill={colors.accentGreen} />
      <Circle cx="30" cy="150" r="3" fill={colors.divider} />
    </Svg>
  );
}
