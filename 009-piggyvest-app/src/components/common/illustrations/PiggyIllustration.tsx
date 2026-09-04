import React from 'react';
import Svg, { Ellipse, Circle, Path } from 'react-native-svg';

export default function PiggyIllustration() {
  return (
    <Svg width={150} height={120} viewBox="0 0 150 120">
      <Ellipse cx="85" cy="70" rx="60" ry="42" fill="#4E7CFF" opacity={0.9} />
      <Circle cx="132" cy="46" r="10" fill="#FFC94A" />
      <Path d="M118 55 L132 42 L136 58 Z" fill="#3E6BFF" />
      <Circle cx="60" cy="60" r="3.5" fill="#1B2A5C" />
      <Path d="M40 78 q6 10 16 6" stroke="#1B2A5C" strokeWidth={3} fill="none" strokeLinecap="round" />
    </Svg>
  );
}
