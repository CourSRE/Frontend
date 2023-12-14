export interface IModuleType {
  moduleId: string;
  sectionId: string;
  moduleTitle: string;
  moduleDesc: string;
  isOptional: number;
  type: "READING" | "VIDEO" | "QUIZ";
  moduleResource: string;
}