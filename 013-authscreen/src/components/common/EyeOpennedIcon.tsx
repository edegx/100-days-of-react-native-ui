import Svg, { Path } from "react-native-svg";

interface IconProps {
  size?: number;
}

export default function EyeOpennedIcon({ size = 18 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 12C4 12 5.6 7 12 7M12 7C18.4 7 20 12 20 12M12 7V4M18 5L16 7.5M6 5L8 7.5M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z"
        stroke="#afb0af"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
