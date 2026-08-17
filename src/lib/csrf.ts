/**
 * CSRF token generation and validation
 * Prevents Cross-Site Request Forgery attacks
 */

import crypto from 'crypto';

interface CSRFTokenRecord {
  token: string;
  createdAt: number;
  expiresAt: number;
}

// In-memory store for CSRF tokens
// Note: For production with Cloudflare, replace this with KV storage
const csrfTokens: Map<string, CSRFTokenRecord> = new Map();

const TOKEN_EXPIRY_MS = 3600000; // 1 hour
const TOKEN_LENGTH = 32; // bytes for crypto.randomBytes

/**
 * Generate a new CSRF token
 * Returns a cryptographically secure random token
 */
export const generateCSRFToken = (): string => {
  const token = crypto.randomBytes(TOKEN_LENGTH).toString('hex');
  const now = Date.now();

  csrfTokens.set(token, {
    token,
    createdAt: now,
    expiresAt: now + TOKEN_EXPIRY_MS,
  });

  // Cleanup old tokens periodically (lazy cleanup)
  if (Math.random() < 0.1) {
    cleanupExpiredTokens();
  }

  return token;
};

/**
 * Validate a CSRF token
 * Returns true if valid and not expired, false otherwise
 * Token is deleted after validation (single-use)
 */
export const validateCSRFToken = (token: string): boolean => {
  if (!token || typeof token !== 'string') {
    return false;
  }

  const record = csrfTokens.get(token);

  if (!record) {
    return false;
  }

  const now = Date.now();

  // Check if token has expired
  if (now > record.expiresAt) {
    csrfTokens.delete(token);
    return false;
  }

  // Token is valid, remove it so it can't be reused
  csrfTokens.delete(token);
  return true;
};

/**
 * Clean up expired CSRF tokens
 * Prevents memory leaks
 */
export const cleanupExpiredTokens = (): number => {
  const now = Date.now();
  const tokensToDelete: string[] = [];

  csrfTokens.forEach((record, token) => {
    if (now > record.expiresAt) {
      tokensToDelete.push(token);
    }
  });

  tokensToDelete.forEach(token => {
    csrfTokens.delete(token);
  });

  return tokensToDelete.length;
};

/**
 * Get token status (for debugging/monitoring)
 */
export const getTokenStatus = (token: string): CSRFTokenRecord | null => {
  return csrfTokens.get(token) || null;
};

/**
 * Get total active tokens count
 */
export const getActiveTokenCount = (): number => {
  return csrfTokens.size;
};

/**
 * Validate CSRF token from request headers
 * Typically called like: validateCSRFTokenFromRequest(req, csrfToken)
 */
export const validateCSRFTokenFromRequest = (
  token: string | null | undefined
): boolean => {
  if (!token) {
    return false;
  }

  return validateCSRFToken(token);
};

// Periodically clean up expired tokens every 10 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupExpiredTokens, 10 * 60 * 1000);
}
