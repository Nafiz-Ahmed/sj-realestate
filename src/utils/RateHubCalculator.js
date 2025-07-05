"use client";

import Container from "@/layout/Container";
import { useEffect, useRef, useState } from "react";

const RateHubCalculator = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);

  const MAX_ATTEMPTS = 3;

  const loadWidget = () => {
    if (!containerRef.current) return;

    // Remove previous script if exists
    const existingScript = document.getElementById("ratehub-script");
    if (existingScript) {
      existingScript.remove();
    }

    // Clear previous content in case of retry
    containerRef.current.innerHTML = "";

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.id = "ratehub-script";
      script.src = "https://www.ratehub.ca/scripts/rh-widget-loader.js";
      script.setAttribute("rh-title", "Mortgage Payment Calculator");
      script.setAttribute(
        "rh-frame-title",
        "Ratehub.ca mortgage payment calculator"
      );
      script.setAttribute("rh-widget-key", "PaymentCalculator");

      // Timeout to detect failure
      const timeout = setTimeout(() => {
        reject(new Error("Load timeout"));
      }, 10000); // 10s timeout

      script.onload = () => {
        clearTimeout(timeout);
        resolve();
      };

      script.onerror = () => {
        clearTimeout(timeout);
        reject(new Error("Load error"));
      };

      containerRef.current.appendChild(script);
    });
  };

  useEffect(() => {
    if (loadAttempts >= MAX_ATTEMPTS) {
      setLoading(false);
      setRetry(true);
      return;
    }

    setLoading(true);
    setRetry(false);

    loadWidget()
      .then(() => {
        setLoading(false);
        setRetry(false);
      })
      .catch(() => {
        setLoading(false);
        setRetry(true);
      });
  }, [loadAttempts]);

  const handleRetry = () => {
    setLoadAttempts((prev) => prev + 1);
  };

  return (
    <div
      style={{
        padding: "0 var(--edge-gap)",
      }}
    >
      <Container>
        <div
          style={{
            width: "100%",
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: loading
              ? "var(--secondary-background-color)"
              : "transparent",
            borderRadius: loading ? "40px" : "0",
          }}
        >
          {loading && (
            <div
              style={{
                color: "var(--text-color)",
                fontWeight: "500",
              }}
            >
              Loading calculator
            </div>
          )}

          {retry && (
            <div className="error">
              <p>Failed to load calculator.</p>
              <button onClick={handleRetry}>Retry</button>
            </div>
          )}

          <div
            ref={containerRef}
            style={{
              width: "100%",
              display: loading || retry ? "none" : "block",
            }}
          ></div>
        </div>
      </Container>
    </div>
  );
};

export default RateHubCalculator;
