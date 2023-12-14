import { IModuleType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const modulesData: IModuleType[] = [
  {
    moduleId: "moduleId-1",
    isOptional: 1,
    moduleDesc: "lorem ipsum dolor sit amet",
    moduleResource: "/images/default-courses-image.jpg",
    moduleTitle: "Title Module Reading",
    sectionId: "sectionId-1",
    type: "READING"
  },
  {
    moduleId: "moduleId-2",
    isOptional: 0,
    moduleDesc: "lorem ipsum dolor sit amet",
    moduleResource: "/images/default-courses-image.jpg",
    moduleTitle: "Title Module Video",
    sectionId: "sectionId-1",
    type: "VIDEO"
  },
  {
    moduleId: "moduleId-3",
    isOptional: 0,
    moduleDesc: "lorem ipsum dolor sit amet",
    moduleResource: '',
    moduleTitle: "Title Module Quiz",
    sectionId: "sectionId-1",
    type: "QUIZ"
  },
]

export async function GET(_req: NextRequest) {
  return NextResponse.json(modulesData, {
    status: 200,
  });
}
