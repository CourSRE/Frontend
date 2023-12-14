import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  return NextResponse.json({message: "Successfully Put"}, {
    status: 200,
  });
}

export async function DELETE(req: NextRequest) {
  return NextResponse.json({message: "Successfully Deleted"}, {
    status: 200,
  });
}