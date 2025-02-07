import { NextResponse } from "next/server";

export async function POST() {
  // Clear JWT from cookies
  const response = NextResponse.json({ message: "Logged out" });
  response.cookies.set("token", "", { expires: new Date(0) }); // Expire cookie

  return response;
}
