import { IUsersType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const usersData: IUsersType[] = [
  {
    userId: "userID-1",
    studentChapter: "SRE Unair",
    fullName: "Some Unair Name",
    email: "email@gmail.com",
    username: "username",
    progressedCourses: [
      {
        courseId: "CourseId-1",
        title: "Bioenergi 101",
        percent: 60
      },
      {
        courseId: "CourseId-2",
        title: "Bioenergi 102",
        percent: 70
      }
    ]
  },
  {
    userId: "userID-2",
    studentChapter: "SRE Gundar",
    fullName: "Some Gundar Name",
    email: "email@gmail.com",
    username: "username",
    progressedCourses: [
      {
        courseId: "CourseId-2",
        title: "Bioenergi 101",
        percent: 60
      }
    ]
  },
  {
    userId: "userID-3",
    studentChapter: "SRE BSI",
    fullName: "Some BSI Name",
    email: "email@gmail.com",
    username: "username",
    progressedCourses: []
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(usersData, {
    status: 200,
  });
}
