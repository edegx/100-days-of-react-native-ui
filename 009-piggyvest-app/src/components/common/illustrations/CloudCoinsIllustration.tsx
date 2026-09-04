import React from 'react';
import Svg, { Circle, Ellipse } from 'react-native-svg';

export default function CloudCoinsIllustration() {
  return (
    <Svg width={140} height={110} viewBox="0 0 140 110">
      <Ellipse cx="80" cy="70" rx="55" ry="34" fill="#F3C9F5" opacity={0.95} />
      <Ellipse cx="45" cy="55" rx="30" ry="22" fill="#F3C9F5" opacity={0.95} />
      <Circle cx="60" cy="72" r="12" fill="#7B2FF7" />
      <Circle cx="88" cy="80" r="12" fill="#5B1FC7" />
      <Circle cx="112" cy="62" r="12" fill="#9C4CFF" />
    </Svg>
  );
}
