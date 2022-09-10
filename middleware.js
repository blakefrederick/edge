import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = new URL('/', request.url)
  url.searchParams.set('from_middleware', true)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: '/redirect',
}