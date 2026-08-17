/**
 * CSRF Token API endpoint
 * GET /api/csrf - Returns a CSRF token for form submission
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateCSRFToken } from '@/lib/csrf';

export async function GET(request: NextRequest) {
  try {
    // Generate new CSRF token
    const token = generateCSRFToken();

    return NextResponse.json(
      { token },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, private',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  } catch (error) {
    console.error('Error generating CSRF token:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    );
  }
}

// Disable other methods
export const POST = undefined;
export const PUT = undefined;
export const DELETE = undefined;
export const PATCH = undefined;
