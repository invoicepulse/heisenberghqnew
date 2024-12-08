import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { type NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { kindeAuth: string } }
) => {
  return handleAuth(request, params.kindeAuth);
};
