"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Listen for Astro view transitions
    document.addEventListener("astro:after-swap", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return null;
}
