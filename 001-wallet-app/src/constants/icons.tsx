// Icons.js
import Svg, { Path } from "react-native-svg";

const ArrowUp = (props: any) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M136 90C150.384 112.919 266.871 185.871 263.166 204.626C261.326 213.931 242.049 227.382 237.725 230.837C217.044 247.361 153.451 296.996 136 310.245"
      stroke="#000000"
      strokeOpacity={0.9}
      strokeWidth={16}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowDown = (props: any) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M136 310C150.384 287.081 266.871 214.129 263.166 195.374C261.326 186.069 242.049 172.618 237.725 169.163C217.044 152.639 153.451 103.004 136 89.755"
      stroke="#000000"
      strokeOpacity={0.9}
      strokeWidth={16}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AngleForward = (props: any) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M136 90L263 200L136 310"
      stroke="#000000"
      strokeOpacity={0.9}
      strokeWidth={16}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AngleBackward = (props: any) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M263 90L136 200L263 310"
      stroke="#000000"
      strokeOpacity={0.9}
      strokeWidth={16}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Icons = {
  ArrowUp,
  ArrowDown,
  AngleForward,
  AngleBackward
};

export default Icons;