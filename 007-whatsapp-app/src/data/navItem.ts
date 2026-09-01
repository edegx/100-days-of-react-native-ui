import { TabConfig } from "@/types";

export const TAB_CONFIG: Record<string, TabConfig> = {
  updates: {
    key: "updates",
    label: "Updates",
    icon: "sync-circle-outline",
    iconActive: "sync-circle",
    badge: "dot",
  },
  calls: {
    key: "calls",
    label: "Calls",
    icon: "call-outline",
    iconActive: "call",
    badge: 10,
  },
  tools: {
    key: "tools",
    label: "Tools",
    icon: "storefront-outline",
    iconActive: "storefront",
    badge: "dot",
  },
  index: {
    key: "index",
    label: "Chats",
    icon: "chatbubbles-outline",
    iconActive: "chatbubbles",
    badge: 440,
  },
  settings: {
    key: "settings",
    label: "Settings",
    icon: "settings-outline",
    iconActive: "settings",
    badge: undefined,
  },
};
