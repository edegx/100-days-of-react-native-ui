import { colors } from "@/constants/colors";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Svg, { Circle, G, Path, Rect } from "react-native-svg";

// --- SVG Icons ---

interface IconProps {
  color: string;
  size: number;
}

function HomeIcon({ color, size }: IconProps) {
  return (
    <Svg
      x="0px"
      y="0px"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <Path d="M28.447,11.583c-0.18-1.417-1.257-2.871-2.817-3.797c-1.425-0.832-2.82-1.674-4.167-2.487	c-1.407-0.85-2.763-1.667-4.045-2.41c-0.834-0.484-1.791-0.49-2.626-0.02c-1.409,0.794-2.904,1.682-4.46,2.604	C9.057,6.231,7.741,7.013,6.391,7.791c-1.572,0.92-2.66,2.38-2.84,3.812c-0.479,3.857-0.266,7.769,0.638,11.644	c0.502,1.978,2.587,4.092,4.572,4.623c2.402,0.592,4.82,0.888,7.239,0.888s4.837-0.296,7.239-0.888	c0.006-0.001,0.013-0.003,0.019-0.005c1.967-0.526,4.052-2.641,4.558-4.637C28.716,19.366,28.929,15.449,28.447,11.583z M20.115,25.303c-0.107,0.681-0.635,1.233-1.321,1.302c-1.856,0.188-3.714,0.189-5.567,0.004c-0.686-0.069-1.215-0.621-1.322-1.302	c-0.325-2.069-0.24-4.138,0.255-6.208c0.154-0.641,0.647-1.154,1.267-1.38c1.722-0.628,3.443-0.628,5.165,0	c0.62,0.226,1.113,0.739,1.267,1.38C20.355,21.167,20.44,23.235,20.115,25.303z"></Path>
    </Svg>
  );
}

function PiggyBankIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 9c0-.34-.03-.67-.08-1H21a1 1 0 000-2h-2.62A5.99 5.99 0 0013 3c-2.05 0-3.84 1.14-4.77 2.82C5.35 6.2 3 8.68 3 11.5V16a1 1 0 001 1h1v2a1 1 0 001 1h2a1 1 0 001-1v-1h4v1a1 1 0 001 1h2a1 1 0 001-1v-2.17c1.19-.66 2-1.92 2-3.33V11"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={16} cy={10} r={1} fill={color} />
      <Path d="M9 3v2" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

function GridIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 16v-5m4 5V8m4 8v-2m2-10H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
      />
    </Svg>
  );
}

function Reward({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x={3}
        y={8}
        width={18}
        height={4}
        rx={1}
        stroke={color}
        strokeWidth={2}
      />
      <Path
        d="M5 12h14v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path d="M12 8v13" stroke={color} strokeWidth={2} />
      <Path
        d="M12 8c0-2.5-1.5-4-3.25-4S6 5.5 6 7c0 1 .75 1 1.5 1H12z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M12 8c0-2.5 1.5-4 3.25-4S18 5.5 18 7c0 1-.75 1-1.5 1H12z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function UserIcon({ color, size }: IconProps) {
  return (
    <Svg
      id="Layer_1"
      width={size}
      height={size}
      fill={color}
      x="0px"
      y="0px"
      viewBox="0 0 330 330"
    >
      <G id="XMLID_92_">
        <Path
          id="XMLID_93_"
          d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
		c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"
        />
        <Path
          id="XMLID_104_"
          d="M205.306,205.305c-22.226,22.224-58.386,22.225-80.611,0.001c-5.857-5.858-15.355-5.858-21.213,0
		c-5.858,5.858-5.858,15.355,0,21.213c16.963,16.963,39.236,25.441,61.519,25.441c22.276,0,44.56-8.482,61.519-25.441
		c5.858-5.857,5.858-15.355,0-21.213C220.661,199.447,211.163,199.448,205.306,205.305z"
        />
      </G>
    </Svg>
  );
}

// --- Tabs Layout ---

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.divider,
          borderTopWidth: StyleSheet.hairlineWidth,
          height: 84,
          paddingTop: 8,
          paddingBottom: 24,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color.toString()} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="loan"
        options={{
          title: "Loan",
          tabBarIcon: ({ color, size }) => (
            <PiggyBankIcon color={color.toString()} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="wealth"
        options={{
          title: "Wealth",
          tabBarIcon: ({ color, size }) => (
            <GridIcon color={color.toString()} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          title: "Reward",
          tabBarIcon: ({ color, size }) => (
            <Reward color={color.toString()} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "Me",
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color.toString()} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
