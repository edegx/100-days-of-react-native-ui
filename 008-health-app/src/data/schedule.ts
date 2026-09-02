import { doctors } from "@/data/doctors";
import { Patient, ScheduleItem } from "@/types";

export const patient: Patient = {
  id: "1",
  name: "Edegware Ezekiel",
  gender: "Male",
  age: 52,
  height: '5.4"',
  treatmentPlansCount: 3,
  image:
    "https://scontent-los4-1.cdninstagram.com/v/t51.2885-19/328790697_565200012334358_8811009323574588240_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-los4-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2gGL8n6SK1-jOsh8WzyXsMMEhty_6T3zGwSmwPVJgI8NJ35o3nUksUpyzeaeyNfnm9s&_nc_ohc=NZAR242TqUsQ7kNvwFhrk6e&_nc_gid=ezOufn6PjkmbRYF-n5injg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AQLkf0ZIjuZXD3184wX_v1AHjaPBAqCfqZrwR4-RCZTVfQ&oe=6A9BFFD8&_nc_sid=10d13b",
};

export const scheduleItems: ScheduleItem[] = [
  {
    id: "1",
    dateLabel: "Sep",
    dateNumber: "07",
    title: "Clinic Visit Appointment",
    doctor: doctors[0],
    type: "clinic",
  },
  {
    id: "2",
    dateLabel: "Sep",
    dateNumber: "09",
    title: "Video Consulting",
    doctor: doctors[3],
    type: "video",
  },
];
