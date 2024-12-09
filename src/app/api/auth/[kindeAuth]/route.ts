import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(req: Request, context: { params: { kindeAuth: string } }) {
  const { kindeAuth } = context.params;
  return handleAuth(req, kindeAuth);
}
