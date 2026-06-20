import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy.
 *
 * Every page on this site is statically rendered, so we use the "without
 * nonces" approach documented by Next.js: scripts and styles are allowed
 * 'unsafe-inline' because Next.js and Tailwind inject inline tags at build
 * time. This keeps all pages static and CDN-cacheable while still closing the
 * high-value injection vectors — objects, <base>, framing, and form targets.
 *
 * When a backend with dynamic rendering is added, this should be upgraded to a
 * nonce-based policy (via a proxy) so 'unsafe-inline' can be dropped from
 * script-src. See node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md
 *
 * 'unsafe-eval' and websocket connect-src are enabled only in development,
 * where React's dev runtime and Turbopack HMR require them.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Security headers applied to every response.
 *
 * Strict-Transport-Security is only honored by browsers over HTTPS (ignored on
 * localhost), so it is safe to send everywhere. `preload` is intentionally
 * omitted — it is a long-term, hard-to-reverse commitment that each deployment
 * should opt into deliberately.
 */
const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
