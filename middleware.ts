import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./lib/actions/auth.action";

export async function middleware(request: NextRequest) {
  const isAuth = await isAuthenticated();

  // If the user is not authenticated and trying to access protected routes
  if (!isAuth && !request.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // If the user is authenticated and trying to access auth pages
  if (isAuth && request.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - static files (/_next/static, /favicon.ico, etc.)
     * - public files
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
