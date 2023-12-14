import { IProgressedCourse } from "..";

export interface IUsersType {
  userId: string;
  username: string;
  email: string;
  fullName: string;
  studentChapter: string;
  progressedCourses: IProgressedCourse[] | []
}
