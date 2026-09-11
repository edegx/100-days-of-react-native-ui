import React from "react";
import Svg, { Circle, G, Line, Path, Polygon, Rect } from "react-native-svg";

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = "#F7F6F4";

export const SearchIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx={11} cy={11} r={7} stroke={color} strokeWidth={strokeWidth} />
    <Line
      x1={21}
      y1={21}
      x2={16.2}
      y2={16.2}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const BellIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 9a6 6 0 1 1 12 0c0 3.6 1 5.2 1.6 6.1.3.4 0 1-.5 1H4.9c-.5 0-.8-.6-.5-1C5 14.2 6 12.6 6 9Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M9.5 18.5a2.5 2.5 0 0 0 5 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const HeadsetIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 13v-1a8 8 0 0 1 16 0v1"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Rect
      x={3}
      y={13}
      width={4}
      height={6}
      rx={1.5}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Rect
      x={17}
      y={13}
      width={4}
      height={6}
      rx={1.5}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M19 19.5v.5a3 3 0 0 1-3 3h-2"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const BankIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9.5 12 4l9 5.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <Path
      d="M4.5 9.5h15V20h-15V9.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Line
      x1={2.5}
      y1={20}
      x2={21.5}
      y2={20}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1={7.5}
      y1={12.5}
      x2={7.5}
      y2={17.5}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1={12}
      y1={12.5}
      x2={12}
      y2={17.5}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1={16.5}
      y1={12.5}
      x2={16.5}
      y2={17.5}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const CopyIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x={8.5} y={8.5} width={11} height={11} rx={2.5} fill={color} />
    <Path
      d="M6.5 15.5h-1a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const DotsVerticalIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx={12} cy={5.5} r={1.6} fill={color} />
    <Circle cx={12} cy={12} r={1.6} fill={color} />
    <Circle cx={12} cy={18.5} r={1.6} fill={color} />
  </Svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 5.5 15.5 12 9 18.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const InfoIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = "#1F1B0E",
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx={12} cy={12} r={9} fill={color} />
    <Circle cx={12} cy={8.2} r={1.15} fill="#F5D949" />
    <Rect x={11} y={10.5} width={2} height={7} rx={1} fill="#F5D949" />
  </Svg>
);

/* ---------- Quick access / payments icons ---------- */

export const TransferIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9.5 12 4l9 5.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <Path
      d="M4.5 9.5h15V20h-15V9.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Line
      x1={2.5}
      y1={20}
      x2={21.5}
      y2={20}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const PhoneIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6.5 3.5 9 6c.3.5.2 1.1-.2 1.5L7.3 9c.9 2.2 2.6 3.9 4.8 4.8l1.5-1.5c.4-.4 1-.5 1.5-.2l2.5 2.5c.5.5.5 1.3-.1 1.7l-1.5 1.2c-.6.5-1.4.6-2.1.4-3.6-1.1-6.9-4.4-8-8-.2-.7-.1-1.5.4-2.1L5.7 4.6c.4-.5 1.2-.6 1.7-.1Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </Svg>
);

export const WifiIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3.5 9a13 13 0 0 1 17 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M6.5 12.8a8.5 8.5 0 0 1 11 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M9.5 16.5a4 4 0 0 1 5 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Circle cx={12} cy={19.5} r={1.3} fill={color} />
  </Svg>
);

export const TrophyIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 4h8v5a4 4 0 0 1-8 0V4Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M8 5H5.5A1.5 1.5 0 0 0 4 6.5c0 2 1.5 3.5 4 3.8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 5h2.5A1.5 1.5 0 0 1 20 6.5c0 2-1.5 3.5-4 3.8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Line
      x1={12}
      y1={13}
      x2={12}
      y2={16.5}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M8.5 20h7"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M9.5 20v-1a2.5 2.5 0 0 1 2.5-2.5v0A2.5 2.5 0 0 1 14.5 19v1"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TvIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x={3}
      y={6}
      width={18}
      height={12}
      rx={2}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Line
      x1={8}
      y1={21}
      x2={16}
      y2={21}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Circle cx={7.2} cy={9.3} r={0.9} fill={color} />
  </Svg>
);

export const BoltIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M13 3 5 13.5h5.5L11 21l8-11h-5.5L13 3Z" fill={color} />
  </Svg>
);

export const SunIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx={12} cy={12} r={4} stroke={color} strokeWidth={strokeWidth} />
    <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
      <Line x1={12} y1={2.5} x2={12} y2={4.5} />
      <Line x1={12} y1={19.5} x2={12} y2={21.5} />
      <Line x1={2.5} y1={12} x2={4.5} y2={12} />
      <Line x1={19.5} y1={12} x2={21.5} y2={12} />
      <Line x1={5.1} y1={5.1} x2={6.5} y2={6.5} />
      <Line x1={17.5} y1={17.5} x2={18.9} y2={18.9} />
      <Line x1={18.9} y1={5.1} x2={17.5} y2={6.5} />
      <Line x1={6.5} y1={17.5} x2={5.1} y2={18.9} />
    </G>
  </Svg>
);

export const CardIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x={3}
      y={5.5}
      width={18}
      height={13}
      rx={2.2}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Line
      x1={3}
      y1={9.5}
      x2={21}
      y2={9.5}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Line
      x1={6}
      y1={14.5}
      x2={10.5}
      y2={14.5}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const FileIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M14 3.5v4h4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Circle cx={11} cy={14.5} r={2} stroke={color} strokeWidth={strokeWidth} />
  </Svg>
);

export const HashIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
      <Line x1={9} y1={3.5} x2={7} y2={20.5} />
      <Line x1={17} y1={3.5} x2={15} y2={20.5} />
      <Line x1={4} y1={9} x2={20} y2={9} />
      <Line x1={3.3} y1={15} x2={19.3} y2={15} />
    </G>
  </Svg>
);

export const PosIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M7 2.5h7l3 3v15.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-17.5a1 1 0 0 1 1-1Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Rect
      x={8.3}
      y={6}
      width={7.4}
      height={5}
      rx={1}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Circle cx={9.7} cy={15} r={0.9} fill={color} />
    <Circle cx={12} cy={15} r={0.9} fill={color} />
    <Circle cx={14.3} cy={15} r={0.9} fill={color} />
    <Circle cx={9.7} cy={18} r={0.9} fill={color} />
    <Circle cx={12} cy={18} r={0.9} fill={color} />
    <Circle cx={14.3} cy={18} r={0.9} fill={color} />
  </Svg>
);

export const GiftIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x={3.5}
      y={9}
      width={17}
      height={4}
      rx={0.8}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Rect
      x={4.5}
      y={13}
      width={15}
      height={8}
      rx={0.8}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Line
      x1={12}
      y1={9}
      x2={12}
      y2={21}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M12 9c0-2.5-1.8-4.5-3.6-4.5S6 6 8 7.5c1 .8 2.5 1.3 4 1.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M12 9c0-2.5 1.8-4.5 3.6-4.5S18 6 16 7.5c-1 .8-2.5 1.3-4 1.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </Svg>
);

export const BusIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x={4}
      y={4}
      width={16}
      height={12.5}
      rx={2.5}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Line
      x1={4}
      y1={9.5}
      x2={20}
      y2={9.5}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Line
      x1={7.5}
      y1={4}
      x2={7.5}
      y2={9.5}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Line
      x1={16.5}
      y1={4}
      x2={16.5}
      y2={9.5}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Circle cx={7.5} cy={19} r={1.4} stroke={color} strokeWidth={strokeWidth} />
    <Circle
      cx={16.5}
      cy={19}
      r={1.4}
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export const BookIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 6.2C10.5 5 8.3 4.5 6 4.5v13.8c2.3 0 4.5.5 6 1.7"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <Path
      d="M12 6.2c1.5-1.2 3.7-1.7 6-1.7v13.8c-2.3 0-4.5.5-6 1.7"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </Svg>
);

export const StarIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3.5 14.5 9l6 .9-4.3 4.2 1 6-5.2-2.8-5.2 2.8 1-6-4.3-4.2 6-.9L12 3.5Z"
      fill={color}
    />
  </Svg>
);

export const TicketIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 9.5a2 2 0 0 0 0-3.8V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v.7a2 2 0 0 0 0 3.8v1.5a2 2 0 0 0 0 3.8V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.7a2 2 0 0 0 0-3.8V9.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Line
      x1={13}
      y1={5}
      x2={13}
      y2={19}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray="2.2,2.2"
    />
  </Svg>
);

export const PercentIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Line
      x1={18.5}
      y1={5.5}
      x2={5.5}
      y2={18.5}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Circle
      cx={7.2}
      cy={7.2}
      r={2.4}
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Circle
      cx={16.8}
      cy={16.8}
      r={2.4}
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export const BarChartIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Line
      x1={5}
      y1={20}
      x2={5}
      y2={13}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1={12}
      y1={20}
      x2={12}
      y2={7}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1={19}
      y1={20}
      x2={19}
      y2={10.5}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

/* ---------- Bottom navigation icons ---------- */

export const HomeIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fill={color}
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z"
    />
  </Svg>
);

export const PayIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} fill={color} viewBox="0 0 512 512">
    <G>
      <G>
        <G>
          <Path d="M403.499,0H117.333v426.667h384V97.835L403.499,0z M224,106.667h106.667c11.776,0,21.333,9.557,21.333,21.333 s-9.557,21.333-21.333,21.333H224c-11.776,0-21.333-9.557-21.333-21.333S212.224,106.667,224,106.667z M394.667,320H224 c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333h170.667c11.776,0,21.333,9.557,21.333,21.333 S406.443,320,394.667,320z M394.667,234.667H224c-11.776,0-21.333-9.557-21.333-21.333S212.224,192,224,192h170.667 c11.776,0,21.333,9.557,21.333,21.333S406.443,234.667,394.667,234.667z" />
          <Polygon points="74.667,85.333 10.667,85.333 10.667,512 373.333,512 373.333,469.333 74.667,469.333  " />
        </G>
      </G>
    </G>
  </Svg>
);

export const SendIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.61 2.64548C20.1948 2.19021 21.6568 3.65224 21.2016 5.23705L17.1785 19.2417C16.5079 21.5761 13.3904 22.0197 12.1096 19.9629L10.3338 17.1113C9.84262 16.3226 9.96155 15.2974 10.6207 14.6383L14.4111 10.8479C14.8022 10.4567 14.8033 9.82357 14.4134 9.43373C14.0236 9.04389 13.3905 9.04497 12.9993 9.43614L9.20901 13.2265C8.54987 13.8856 7.52471 14.0046 6.73596 13.5134L3.88412 11.7375C1.82737 10.4567 2.27092 7.33918 4.60532 6.66858L18.61 2.64548Z"
      fill={color}
    />
  </Svg>
);

export const SaveIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32">
    <Path
      fill={color}
      d="M4,19 C4,17.34 5.34,16 7,16 C8.66,16 10,17.34 10,19 L10,10 C10,8.34 11.34,7 13,7 C14.66,7 16,8.34 16,10 L16,19 C16,17.34 17.34,16 19,16 C20.66,16 22,17.34 22,19 L22,13 C22,11.34 23.34,10 25,10 C26.66,10 28,11.34 28,13 L28,27 L4,27 Z"
    />
    <Rect x="4" y="26" width="24" height="5" rx="2.5" fill={color} />
  </Svg>
);

export const BorrowIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg fill={color} width={size} height={size} viewBox="0 0 1000 1000">
    <Path d="M840 651q-6-20-16-43-7-14-21-40.5T783 527q-10-22-15-41-12-40-6-96 4-52 20-95 4-12 23-35 17-22 22-33 9-18 3-34-8-22-39-35-19-8-58-16l-21-5-47-11q-53-13-80-21-43-13-76-30-4-3-18-13-23-18-35-24-20-11-31-5-19 11-21 70-2 35 2 75 8 83 36 131-99 29-173 106T167 592q-16 56-17 105 0 64 28 101 19 26 57 52 22 15 69 40l14 7q87 48 159 62 84 17 171-6 63-18 114-64t72-107q23-66 6-131zm-487 53q-19 0-27-24-7-22-2-53.5t19-52.5q17-23 40-22 26 2 34 26 8 21-.5 51.5T390 682t-37 22zm360-229q-8 21-35 44-16 13-48 35l-8 6q-27 19-47.5 21.5T523 573q-29-10-85-36l-28-12-23-10q-31-12-45-19-24-12-34-25-21-30 5-57 16-16 58-38l13-6q38-21 61-27 31-7 67 2 71 19 128 46 89 43 73 84z" />
  </Svg>
);

/* ---------- Misc ---------- */

export const KudaMarkIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Line
      x1={6}
      y1={3.5}
      x2={6}
      y2={20.5}
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
    />
    <Path
      d="M7 12 15.5 3.5"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
    />
    <Path
      d="M7 12 16 20.5"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);

export const ArrowUpRightIcon: React.FC<IconProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Line
      x1={6}
      y1={18}
      x2={18}
      y2={6}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M9 6h9v9"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
