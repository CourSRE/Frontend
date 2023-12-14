import { ISectionType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const getData: ISectionType[] = [
  {
    courseId: "courseId-1",
    sectionId: "sectionId-1",
    sectionName: "Minggu 1",
  },
  {
    courseId: "courseId-1",
    sectionId: "sectionId-2",
    sectionName: "Minggu 2",
  },
]

export async function GET(req: NextRequest) {
  return NextResponse.json(getData, {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({message: "Successfully Edited"}, {
    status: 200,
  });
}
                                                       
