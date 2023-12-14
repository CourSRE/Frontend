import { ICourseType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const courseData: ICourseType = {
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
  whatWillLearn: "What will Learn, Is"
};

export async function GET(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;
  return NextResponse.json(courseData, {
    status: 200,
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;
  return NextResponse.json(courseData, {
    status: 200,
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  return NextResponse.json(
    {
      idCourse: params?.courseId,
      message: "Deleted Course",
    },
    {
      status: 200,
    }
  );
}
