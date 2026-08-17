/**
 * Rate limiting utility for API endpoints
 * Prevents abuse and DoS attacks
 */

import { NextRequest } from 'next/server';

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
// Note: For production with Cloudflare, replace this with KV storage
const requestCounts: Map<string, RateLimitRecord> = new Map();

const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_HOUR = 5; // Max 5 requests per hour per IP

/**
 * Get client IP address from request
 * Handles proxied requests (Cloudflare, load balancers, etc.)
 */
export const getClientIp = (request: NextRequest): string => {
  // Try multiple headers for different proxy setups
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return 'unknown';
};

/**
 * Check if request should be rate limited
 * Returns { allowed: boolean, retryAfter?: number }
 */
export const checkRateLimit = (
  ip: string,
  maxRequests: number = MAX_REQUESTS_PER_HOUR,
  windowMs: number = RATE_LIMIT_WINDOW
): { allowed: boolean; retryAfter?: number } => {
  const now = Date.now();

  // Get or create record for this IP
  let record = requestCounts.get(ip);

  if (!record) {
    // First request from this IP
    requestCounts.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true };
  }

  // Check if window has expired
  if (now > record.resetTime) {
    // Reset the counter
    record.count = 1;
    record.resetTime = now + windowMs;
    requestCounts.set(ip, record);
    return { allowed: true };
  }

  // Check if limit exceeded
  if (record.count >= maxRequests) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  // Increment counter
  record.count++;
  requestCounts.set(ip, record);
  return { allowed: true };
};

/**
 * Clean up expired rate limit records
 * Call this periodically to prevent memory leaks
 */
export const cleanupExpiredRecords = (): void => {
  const now = Date.now();
  const ipsToDelete: string[] = [];

  requestCounts.forEach((record, ip) => {
    if (now > record.resetTime) {
      ipsToDelete.push(ip);
    }
  });

  ipsToDelete.forEach(ip => {
    requestCounts.delete(ip);
  });
};

/**
 * Middleware-style function for rate limiting in API routes
 * Returns Response if rate limited, or undefined if allowed
 */
export const rateLimitMiddleware = (
  request: NextRequest,
  maxRequests: number = MAX_REQUESTS_PER_HOUR,
  windowMs: number = RATE_LIMIT_WINDOW
): { allowed: boolean; retryAfter?: number } => {
  const ip = getClientIp(request);
  return checkRateLimit(ip, maxRequests, windowMs);
};

/**
 * Get current rate limit status for an IP (for monitoring)
 */
export const getRateLimitStatus = (ip: string): RateLimitRecord | null => {
  return requestCounts.get(ip) || null;
};

/**
 * Reset rate limit for a specific IP (admin function)
 */
export const resetRateLimit = (ip: string): void => {
  requestCounts.delete(ip);
};

/**
 * Reset all rate limits (admin function)
 */
export const resetAllRateLimits = (): void => {
  requestCounts.clear();
};

// Clean up expired records every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupExpiredRecords, 5 * 60 * 1000);
}
