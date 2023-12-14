import { UploadFile } from "antd";

export type TExpertise = "Beginner" | "Intermediate" | "Advanced"

export interface IAddCourseFieldType {
  title: string;
  desc: string;
  longDesc: string;
  estimateFinish: string;
  expertise: TExpertise;
  picture: File | UploadFile;
  whatWillLearn: string;
}