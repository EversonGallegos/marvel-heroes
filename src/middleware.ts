import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // const currentUser = request.cookies.get('currentUser')?.value
  // if (currentUser) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url))
  // }
  // return NextResponse.redirect(new URL('/login', request.url))
}
 
// export const config = {
//   matcher: [
//     '/dashboard/:path*',
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// }