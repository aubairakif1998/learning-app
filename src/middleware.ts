
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isAuthPath = path === '/login' || path === '/signup'
    const isPublicPath = path === '/'

    const token = request.cookies.get('token')?.value || ''

    if (isAuthPath && token) {
        return NextResponse.redirect(new URL('/quiz', request.nextUrl))
    }
    if (isPublicPath && token) {
        // return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (isPublicPath && !token) {
        // return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (!isAuthPath && !isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}


// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/quiz',
        '/login',
        '/signup',
    ]
}