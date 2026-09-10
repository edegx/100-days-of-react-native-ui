import React from "react";
import { Path, Svg } from "react-native-svg";

// Camera Icon
export const CameraIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = "#000000",
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"
      fill={color}
    />
  </Svg>
);

// Chat Icon
export const ChatIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = "#000000",
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.35078106,18 L3.62469505,21.7808688 C2.9699317,22.3046795 2,21.8385062 2,21 L2,5 C2,3.34314575 3.34314575,2 5,2 L19,2 C20.6568542,2 22,3.34314575 22,5 L22,15 C22,16.6568542 20.6568542,18 19,18 L8.35078106,18 Z M4,18.9193752 L7.37530495,16.2191312 C7.552618,16.0772808 7.7729285,16 8,16 L19,16 C19.5522847,16 20,15.5522847 20,15 L20,5 C20,4.44771525 19.5522847,4 19,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,18.9193752 Z"
      fill={color}
    />
  </Svg>
);

// Location Icon
export const LocationIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = "#000000",
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 10.3636C19 16.0909 12 21 12 21C12 21 5 16.0909 5 10.3636C5 8.41068 5.7375 6.53771 7.05025 5.15676C8.36301 3.77581 10.1435 3 12 3C13.8565 3 15.637 3.77581 16.9497 5.15676C18.2625 6.53771 19 8.41068 19 10.3636Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// People Icon
export const PeopleIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = "#000000",
}) => (
  <Svg width={size} height={size} viewBox="0 0 512 512">
    <Path
      fill={color}
      d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"
    />
    <Path
      fill={color}
      d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"
    />
  </Svg>
);

// Play Icon
export const PlayIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = "#000000",
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 4V20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 12L6 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 12L6 4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Example usage component
export const IconsExample: React.FC = () => (
  <>
    <CameraIcon size={30} color="#000000" />
    <ChatIcon size={30} color="#000000" />
    <LocationIcon size={30} color="#000000" />
    <PeopleIcon size={30} color="#000000" />
    <PlayIcon size={30} color="#000000" />
  </>
);

export default {
  CameraIcon,
  ChatIcon,
  LocationIcon,
  PeopleIcon,
  PlayIcon,
};
