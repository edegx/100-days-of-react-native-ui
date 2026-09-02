import { imageMap } from '@/constants/imageMap';

export interface Category {
  id: string;
  title: string;
  icon: keyof typeof imageMap;  
}
 
export interface RecentVisit {
  id: string;
  doctor: Doctor;
  date: string;
  time: string;
  medium: string;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: keyof typeof imageMap;   
}
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

export interface Appointment {
  id: string;
  doctor: Doctor;
  service: string;
  date: string;
  time: string;
}

export interface Patient {
  id: string;
  name: string;
  gender: string;
  age: number;
  height: string;
  treatmentPlansCount: number;
  image: string;
}

export interface ScheduleItem {
  id: string;
  dateLabel: string;
  dateNumber: string;
  title: string;
  doctor: Doctor;
  type: 'clinic' | 'video';
}

export type IconSet = 'material-community' | 'ionicons' | 'font-awesome5';
