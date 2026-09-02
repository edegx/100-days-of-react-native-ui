import { RecentVisit } from "@/types";
import { doctors } from "./doctors";

export const recentVisits: RecentVisit[] = [
  {
    id: "1",
    doctor: doctors[0], // Dr. Jennifer Smith
    date: "23 Aug, 2026",
    time: "10:30 PM",
    medium: "In-person",
  },
  {
    id: "2",
    doctor: doctors[2], // Dr. Devon Lane
    date: "15 Aug, 2026",
    time: "02:15 PM",

    medium: "Zoom",
  },
  {
    id: "3",
    doctor: doctors[1], // Dr. Warner
    date: "05 Aug, 2026",
    time: "09:00 AM",
    medium: "Zoom",
  },
  {
    id: "4",
    doctor: doctors[4], // Dr. Roman Novara
    date: "28 Jul, 2026",
    time: "04:45 PM",
    medium: "Phone",
  },
];
