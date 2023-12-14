import { ICourseType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const coursesData: ICourseType[] = [
  {
    courseId: "courseId-1",
    estimateFinishTime: "2 Jam 6 Menit",
    expertise: "Beginner",
    imageLink: "/images/default-courses-image.jpg",
    instructorId: "InstructorId-1",
    instructorName: "SRE Indonesia",
    title: "Bioenergi 101",
    totalLessons: 6,
    courseDesc: "Desc Singkat",
    courseLongDesc: "Long Desc",
    whatWillLearn: "What will Learn, Is",
  },
  {
    courseId: "courseId-2",
    estimateFinishTime: "2 Jam 6 Menit",
    expertise: "Beginner",
    imageLink: "/images/default-courses-image.jpg",
    instructorId: "InstructorId-1",
    instructorName: "SRE Indonesia",
    title: "Bioenergi 102",
    totalLessons: 6,
    courseDesc: "Desc Singkat",
    courseLongDesc: "Long Desc",
    whatWillLearn: "What will Learn, Is",
  },
  {
    courseId: "courseId-3",
    estimateFinishTime: "2 Jam 6 Menit",
    expertise: "Beginner",
    imageLink: "/images/default-courses-image.jpg",
    instructorId: "InstructorId-1",
    instructorName: "SRE Indonesia",
    title: "Bioenergi 103",
    totalLessons: 6,
    courseDesc: "Desc Singkat",
    courseLongDesc: "Long Desc",
    whatWillLearn: "What will Learn, Is",
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(coursesData, {
    status: 200,
  });
}
