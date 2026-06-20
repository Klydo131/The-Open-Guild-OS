# Security Policy

The Open Guild OS is open source, and we take the security of the project and
its community seriously. Thank you for helping keep artisans safe.

## Supported Versions

This project is in active early development. Security fixes are applied to the
latest `main` branch. There are no long-term support branches yet.

| Version        | Supported          |
| -------------- | ------------------ |
| `main` (latest)| :white_check_mark: |
| older commits  | :x:                |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues,
pull requests, or discussions.**

Instead, use GitHub's private vulnerability reporting:

1. Go to the repository's **Security** tab.
2. Click **Report a vulnerability**.
3. Provide a clear description, reproduction steps, and the potential impact.

We aim to acknowledge reports within **72 hours** and to provide a remediation
timeline after triage. We will keep you updated as we work on a fix and will
credit you in the release notes unless you prefer to remain anonymous.

### What to include

- The type of issue (e.g. XSS, CSRF, injection, auth bypass).
- The affected route, component, or file.
- Step-by-step instructions to reproduce.
- Proof-of-concept code or screenshots, if available.
- Any suggested mitigation you have in mind.

## Scope

In scope:

- The web application in this repository.
- Build and deployment configuration committed to this repository.

Out of scope:

- Vulnerabilities in third-party dependencies that have no exploitable path in
  this application. Report those upstream.
- Findings that require physical access, a rooted/jailbroken device, or
  social engineering of maintainers.
- Denial-of-service via volumetric traffic.

## Our Security Practices

- **Strict HTTP security headers** — Content-Security-Policy, HSTS,
  `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`,
  cross-origin isolation, and a restrictive Permissions-Policy. See
  [`next.config.ts`](./next.config.ts).
- **No `dangerouslySetInnerHTML` or `eval`** — all rendered content is escaped
  by React.
- **External links** use `rel="noopener noreferrer"`.
- **Input validation** is centralized in
  [`src/lib/validation.ts`](./src/lib/validation.ts) with shared length limits.
- **Secrets** are never committed; see [`.env.example`](./.env.example) for the
  expected configuration shape.

## Disclosure Philosophy

We practice coordinated disclosure. Please give us a reasonable window to
release a fix before any public discussion of the vulnerability.
