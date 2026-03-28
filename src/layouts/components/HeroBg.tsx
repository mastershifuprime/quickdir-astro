"use client";

import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

const HeroBg = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDarkMode = mounted && (theme === "dark" || resolvedTheme === "dark");

  return (
    <div
      className={`absolute inset-0 size-full w-[105%] bg-center bg-no-repeat -z-10`}
      style={{
        backgroundImage: `url('/images/homepage/bg-pattern-${isDarkMode ? "light" : "dark"}.svg')`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default HeroBg;
