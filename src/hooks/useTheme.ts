import { useCallback, useEffect, useState } from "react";

export function useTheme() {
  const [theme, setThemeState] = useState<string>("system");
  const [resolvedTheme, setResolvedTheme] = useState<string>("light");

  const getSystemTheme = useCallback(() => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const applyTheme = useCallback(
    (newTheme: string) => {
      const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
      setResolvedTheme(resolved);

      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(resolved);
      }
    },
    [getSystemTheme],
  );

  const setTheme = useCallback(
    (newTheme: string) => {
      setThemeState(newTheme);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      applyTheme(newTheme);
    },
    [applyTheme],
  );

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "system";
    setThemeState(stored);
    applyTheme(stored);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = localStorage.getItem("theme") || "system";
      if (current === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [applyTheme]);

  return { theme, setTheme, resolvedTheme };
}
