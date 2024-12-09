import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { kindeAuth: string } }
) {
  return handleAuth(request, params.kindeAuth);
}
