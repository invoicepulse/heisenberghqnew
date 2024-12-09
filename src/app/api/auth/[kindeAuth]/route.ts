import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { kindeAuth: string } }
): Promise<Response> {
  const response = await handleAuth(request, params.kindeAuth);
  return NextResponse.json(response);
}
