export interface ICourseType {
  courseId: string;
  title: string;
  courseDesc: string;
  courseLongDesc: string;
  whatWillLearn: string;
  totalLessons: number;
  estimateFinishTime: string;
  expertise: string;
  imageLink: string;
  instructorId: string;
  instructorName: string
}

export interface IProgressedCourse {
  courseId: string;
  title: string;
  percent: number;
}