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
  title: string;
  comment: string;
  idx: number;
}

export interface bannerInfo {
  title: string;
  subtitle: string;
  buttonText: string;
  link: string;
  imageSrc: string;
  index: 1 | 2 | 0;
}
