import { SettingsSectionData } from "@/types";

export const profile = {
  name: "Byteverse Technology",
  subtitle: "Chasing Dreams | Developer ™",
  avatar: { initials: "BT", color: "#4F4F52" },
};

export const settingsSections: SettingsSectionData[] = [
  {
    id: "business",
    items: [
      {
        id: "advertise",
        icon: "megaphone-outline",
        label: "Advertise",
        showChevron: true,
      },
      {
        id: "business-tools",
        icon: "storefront-outline",
        label: "Business tools",
        showChevron: true,
      },
      {
        id: "meta-verified",
        icon: "checkmark-circle-outline",
        label: "Meta Verified",
        showChevron: true,
      },
    ],
  },
  {
    id: "organize",
    items: [
      {
        id: "starred",
        icon: "star-outline",
        label: "Starred",
        showChevron: true,
      },
      {
        id: "broadcast",
        icon: "megaphone-outline",
        label: "Broadcast messages",
        showChevron: true,
      },
      {
        id: "communities",
        icon: "people-outline",
        label: "Communities",
        showChevron: true,
      },
      {
        id: "linked-devices",
        icon: "laptop-outline",
        label: "Linked devices",
        showChevron: true,
      },
    ],
  },
  {
    id: "account",
    items: [
      {
        id: "account",
        icon: "key-outline",
        label: "Account",
        showChevron: true,
      },
      {
        id: "privacy",
        icon: "lock-closed-outline",
        label: "Privacy",
        showChevron: true,
      },
      {
        id: "chats",
        icon: "chatbubble-ellipses-outline",
        label: "Chats",
        showChevron: true,
      },
      {
        id: "notifications",
        icon: "notifications",
        label: "Notification",
        showChevron: true,
      },
    ],
  },
];
