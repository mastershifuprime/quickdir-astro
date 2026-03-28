"use client";

import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

const AnimatedBadge = ({ badgeTitle }: { badgeTitle: string }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDarkMode = mounted && (theme === "dark" || resolvedTheme === "dark");

  return (
    <div
      className="badge mb-5 badge_animate text-dark overflow-hidden"
      style={{
        backgroundSize: "200% 210%",
        backgroundImage: isDarkMode
          ? `url('/images/shapes/badgebg.svg')`
          : `url('/images/shapes/badgebg-white.svg')`,
      }}
    >
      {badgeTitle}
    </div>
  );
};

export default AnimatedBadge;
