import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  // Grab the url object
  const url = new URL(request.url);
  // get the session code from the query param
  const code = url.searchParams.get("code");
  // if it exists, then user is logged in
  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    // exchange the code for a session
    await supabase.auth.exchangeCodeForSession(code);
    console.log("logged in");
  }
  console.log("url origin", url.origin);
  // redirect to the previous/origin page
  return NextResponse.redirect(url.origin);
}
