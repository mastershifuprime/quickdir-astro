"use client";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

const BgStars = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDarkMode = mounted && (theme === "dark" || resolvedTheme === "dark");

  return (
    <div className="bg-stars">
      {isDarkMode ? (
        <>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </>
      ) : (
        <>
          <span className="star-dark"></span>
          <span className="star-dark"></span>
          <span className="star-dark"></span>
          <span className="star-dark"></span>
        </>
      )}
    </div>
  );
};

export default BgStars;
