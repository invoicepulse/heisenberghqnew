import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  return withAuth(req);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
