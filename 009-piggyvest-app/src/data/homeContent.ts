import { colors } from "@/constants/colors";
import { ActivityItem, MediaItem, SuggestionItem } from "@/types";

export const suggestions: SuggestionItem[] = [
  {
    id: "1",
    imageUrl:
      "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/AUG_14th_App_Banner_Olamiji_6b01129e1a/AUG_14th_App_Banner_Olamiji_6b01129e1a.jpg",
  },
  {
    id: "2",
    imageUrl:
      "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/AUG_18th_In_App_Banner_Update_ebbcbb15ee/AUG_18th_In_App_Banner_Update_ebbcbb15ee.jpg",
  },
  {
    id: "3",
    imageUrl:
      "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/In_App_Banner_1_7a258fab22/In_App_Banner_1_7a258fab22.png",
  },
  {
    id: "4",
    imageUrl:
      "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/AUG_18th_In_App_Banner_Update_Interest_1_8e67f4d85f/AUG_18th_In_App_Banner_Update_Interest_1_8e67f4d85f.jpg",
  },
  {
    id: "5",
    imageUrl:
      "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/AUG_17th_In_App_Banner_Update_Real_Estate_828ff52c05/AUG_17th_In_App_Banner_Update_Real_Estate_828ff52c05.jpg",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: "olamiji-profile",
    title: "Meet Olamiji Awosanya 💙",
    subtitle: "Meet Our Saver of the Month",
    imageUrl:
      "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/SOTM_August_1_42_1_1_7e90cbec18/SOTM_August_1_42_1_1_7e90cbec18.png",
  },
  {
    id: "blog",
    title: "Read Blog",
    subtitle: "",
    
    imageUrl:
      "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/IMG_8416_496defa297/IMG_8416_496defa297.jpg",
  },
  {
    id: "video",
    title: "Video",
    subtitle: "",
    imageUrl:
      "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/1_58accbcd0c/1_58accbcd0c.png",
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: "1",
    title: "Flex account credited.",
    timeAgo: "15 minutes ago",
    icon: "wallet",
    iconBackground: "rgba(255, 61, 143, 0.15)",
    iconColor: colors.pink,
    menuColor: colors.pinkMuted,
  },
  {
    id: "2",
    title: "Core savings debited.",
    timeAgo: "5 hours ago",
    icon: "shield",
    iconBackground: "rgba(62, 107, 255, 0.15)",
    iconColor: colors.blueLight,
    menuColor: "rgba(255,255,255,0.08)",
  },
  {
    id: "3",
    title: "Core savings credited.",
    timeAgo: "5 hours ago",
    icon: "shield",
    iconBackground: "rgba(62, 107, 255, 0.15)",
    iconColor: colors.blueLight,
    menuColor: "rgba(255,255,255,0.08)",
  },
  {
    id: "4",
    title: "Flex account credited.",
    timeAgo: "5 hours ago",
    icon: "wallet",
    iconBackground: "rgba(255, 61, 143, 0.15)",
    iconColor: colors.pink,
    menuColor: colors.pinkMuted,
  },
];
