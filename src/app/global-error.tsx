"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D0A06",
          color: "#D4C4A0",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 400, padding: 24 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(255, 107, 53, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: 32,
            }}
          >
            ⚠
          </div>
          <h1
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#E8D9C0",
              margin: "0 0 8px",
            }}
          >
            Critical Error
          </h1>
          <p style={{ fontSize: 14, color: "#A08B60", margin: "0 0 24px" }}>
            The tavern has encountered a catastrophic error. Our scribes are investigating.
          </p>
          {error.digest && (
            <p
              style={{
                fontSize: 11,
                color: "#5C4A2A",
                fontFamily: "monospace",
                margin: "0 0 24px",
              }}
            >
              Reference: {error.digest}
            </p>
          )}
          <button
            onClick={() => unstable_retry()}
            style={{
              background: "#FFC520",
              color: "#0D0A06",
              border: "none",
              borderRadius: 8,
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
