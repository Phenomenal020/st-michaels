import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";


// Get All calendar
export async function GET(request: any) {
  console.log("running get calendar")
  // get the data in json format from the request object
  const testimonial = await request.json();
  //   get supabase instance
  const supabase = createRouteHandlerClient({ cookies });
  // insert the data
  const { data, error } = await supabase.from("calendar").select();
  return NextResponse.json({ data, error });
}


// ---------- Post a single testimonial for now
export async function POST(request: any) {
  // get the data in json format from the request object
  const calendar = await request.json();
  //   get supabase instance
  const supabase = createRouteHandlerClient({ cookies });
  //   get the current user
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // insert the data
  const { data, error } = await supabase
    .from("calendar")
    .insert({
      ...calendar,
      user_email: session?.user.email,
    })
    .select()
    .single();

  return NextResponse.json({ data, error });
}

// NOTE: FOR NOW:
// Server Components --> Use in-component data fetching
// Client components --> Use route handlers
// ----------------- In the component: Preferably client component ----------
// const res = await fetch("http://localhost:3000/api/db", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         body: JSON.stringify(testimonial)
//     }
//     const json = await res.json()

//     if(json.error) {
//         // do stuff
//     }
//     if(json.data) {
//         Router.refresh()
//         Router.push()
//     }
// })

// NOTE: TO FETCH A SINGLE Document, REFER TO LECTURE 33
