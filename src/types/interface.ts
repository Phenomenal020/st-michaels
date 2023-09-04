export interface Post {
  imgSrc: string;
  date: string;
  header: string;
  body: string;
}

export interface Glance {
  campuses: number;
  foundingYear: number;
  classrooms: number;
  parents: number;
  passRate: number;
}

export interface BannerImage {
  source: string;
  index: number;
}

export interface CalendarInfo {
  day: string;
  month: string;
  year: number;
  header: string;
  comment: string;
  idx: number;
}