import { IRankUsersDataType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const usersData: IRankUsersDataType[] = [
  {
    rank: 1,
    id: "userID-1",
    studentChapter: "SRE Unair",
    fullName: "Some Unair Name",
    percent: 85,
    averageScore: 95,
  },
  {
    rank: 2,
    id: "userID-2",
    studentChapter: "SRE Gundar",
    fullName: "Some Gundar Name",
    percent: 85,
    averageScore: 95,
  },
  {
    rank: 3,
    id: "userID-3",
    studentChapter: "SRE BSI",
    fullName: "Some BSI Name",
    percent: 85,
    averageScore: 95,
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(usersData, {
    status: 200,
  });
}
