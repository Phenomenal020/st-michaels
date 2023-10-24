import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next(); // always call next()
  const supabase = createMiddlewareClient({ req, res }); // create a middleware client
  // Grab the user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // ------------- No need to login twice.
  // if user is signed in and the current path is /login, redirect the user to /
  if (user && req.nextUrl.pathname === "/smaan/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ---------------- PROTECT "/create" route
  // if user is not signed in and the current path is /create, redirect the user to /login
  if (!user && req.nextUrl.pathname === "/blog/smaan/create") {
    return NextResponse.redirect(new URL("/smaan/login", req.url));
  }

  // refresh the session and update the cookie if required
  await supabase.auth.getSession();

  return res;
}
