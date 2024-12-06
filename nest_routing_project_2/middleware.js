import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("Middleware executed");
  return NextResponse.next();
}
// This is the middleware that will be executed
