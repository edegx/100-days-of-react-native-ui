import Svg, { Path } from "react-native-svg";

interface EyeClosedIconProps {
  size?: number;
}

export default function EyeClosedIcon({ size = 18 }: EyeClosedIconProps) {
  return (
   <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 10C2 10 5.5 14 12 14C18.5 14 22 10 22 10"
        stroke="#afb0af"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4 11.6445L2 14"
        stroke="#afb0af"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22 14L20.0039 11.6484"
        stroke="#afb0af"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.91406 13.6797L8 16.5"
        stroke="#afb0af"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.0625 13.6875L16 16.5"
        stroke="#afb0af"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
