/**
 * Shared input validation helpers and length limits for forms.
 *
 * These run client-side for fast feedback. When server actions or API routes
 * are added, the same limits and validators MUST be re-applied on the server —
 * client-side validation is a UX nicety, never a security boundary on its own.
 */

/** Maximum accepted lengths for user-entered fields, in characters. */
export const FIELD_LIMITS = {
  name: 80,
  email: 254, // RFC 5321 maximum
  title: 100,
  skills: 200,
  message: 2000,
  description: 2000,
} as const;

// Pragmatic email shape check — full RFC validation belongs on the server.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  return trimmed.length <= FIELD_LIMITS.email && EMAIL_PATTERN.test(trimmed);
}

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function hasMinLength(value: string, min: number): boolean {
  return value.trim().length >= min;
}

export function isPositiveNumber(value: string): boolean {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0;
}

/**
 * Collapses runs of whitespace and trims. Useful for normalizing single-line
 * values before persisting or displaying them.
 */
export function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
