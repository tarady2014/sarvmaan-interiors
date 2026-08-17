/**
 * Input validation and sanitization utilities
 * Prevents XSS, email injection, and DoS attacks
 */

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  timeline: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validate contact form data
 */
export const validateContactForm = (data: Partial<ContactFormData>): ValidationResult => {
  const errors: string[] = [];

  // Check required fields
  if (!data.fullName) errors.push('Full name is required');
  if (!data.email) errors.push('Email is required');
  if (!data.phone) errors.push('Phone number is required');
  if (!data.city) errors.push('City is required');
  if (!data.projectType) errors.push('Project type is required');
  if (!data.timeline) errors.push('Timeline is required');

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email!)) {
    errors.push('Please enter a valid email address');
  }

  // Phone validation (accepts various formats, converts to digits only for validation)
  // Accepts international phone numbers: 10-15 digits
  // Formats like: +1 234 567 8900, +91 98765 43210, 0234-567-8900, etc.
  const phoneDigits = data.phone!.replace(/\D/g, '');
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.push('Phone number must be between 10 and 15 digits');
  }

  // Name validation
  if (data.fullName!.length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (data.fullName!.length > 100) {
    errors.push('Name must not exceed 100 characters');
  }

  if (!/^[a-zA-Z\s'-]*$/.test(data.fullName!)) {
    errors.push('Name can only contain letters, spaces, hyphens, and apostrophes');
  }

  // City validation
  if (data.city!.length < 2) {
    errors.push('City must be at least 2 characters');
  }

  if (data.city!.length > 50) {
    errors.push('City must not exceed 50 characters');
  }

  if (!/^[a-zA-Z\s'-]*$/.test(data.city!)) {
    errors.push('City can only contain letters, spaces, hyphens, and apostrophes');
  }

  // Message validation (max 1000 chars)
  if (data.message && data.message.length > 1000) {
    errors.push('Message cannot exceed 1000 characters');
  }

  // Project type validation (matches form dropdown values)
  const validProjectTypes = [
    'home-interior',
    'kitchen',
    'wardrobe',
    'commercial',
    'renovation'
  ];
  if (!validProjectTypes.includes(data.projectType!)) {
    errors.push('Invalid project type selected');
  }

  // Timeline validation (matches form dropdown values)
  const validTimelines = [
    'immediately',
    '1-3-months',
    '3-6-months'
  ];
  if (!validTimelines.includes(data.timeline!)) {
    errors.push('Invalid timeline selected');
  }

  return { isValid: errors.length === 0, errors };
};

/**
 * Sanitize HTML special characters to prevent XSS
 * Converts HTML special characters to entities
 */
export const sanitizeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char] || char);
};

/**
 * Sanitize text input (removes suspicious patterns)
 * Prevents email injection and other text-based attacks
 */
export const sanitizeText = (text: string): string => {
  // First sanitize HTML
  let sanitized = sanitizeHtml(text.trim());

  // Remove newlines in email and phone fields to prevent email injection
  // (only use this for email/phone, not general text)
  return sanitized;
};

/**
 * Sanitize email to prevent header injection
 * Email addresses should not contain newlines or special characters
 */
export const sanitizeEmail = (email: string): string => {
  return email
    .toLowerCase()
    .trim()
    .replace(/[\r\n]/g, '') // Remove newlines
    .replace(/[<>]/g, ''); // Remove angle brackets
};

/**
 * Sanitize phone number
 * Keeps only digits, spaces, hyphens, and plus sign
 */
export const sanitizePhone = (phone: string): string => {
  return phone.replace(/[^\d\s\-+()]/g, '').trim();
};

/**
 * Validate and sanitize URL parameters
 */
export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check if string contains suspicious patterns
 */
export const hasSuspiciousPatterns = (text: string): boolean => {
  const suspiciousPatterns = [
    /javascript:/i,
    /on\w+\s*=/i, // Event handlers like onclick=
    /<script/i,
    /<iframe/i,
    /vbscript:/i,
    /data:text\/html/i,
  ];

  return suspiciousPatterns.some(pattern => pattern.test(text));
};
