import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  console.log(formData?.get('file'));  
  
  return NextResponse.json({message: "Successfully Uploaded"}, {
    status: 200,
  });
}
