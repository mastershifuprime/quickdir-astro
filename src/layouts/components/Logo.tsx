"use client";

import config from "@/config/config.json";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

const Logo = ({ src }: { src?: string }) => {
  const {
    logo,
    logo_darkmode,
    logo_width,
    logo_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_darkmode: string;
    logo_width: any;
    logo_height: any;
    logo_text: string;
    title: string;
  } = config.site;

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedLogo =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? logo_darkmode
      : logo;
  const logoPath = src ? src : resolvedLogo;

  return (
    <a href="/" className="navbar-brand inline-block">
      {logoPath ? (
        <img
          width={logo_width.replace("px", "") * 2}
          height={logo_height.replace("px", "") * 2}
          src={logoPath}
          alt={title}
          style={{
            height: logo_height.replace("px", "") + "px",
            width: logo_width.replace("px", "") + "px",
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </a>
  );
};

export default Logo;
